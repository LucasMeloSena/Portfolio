import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/infra/prisma";
import { promisify } from "util";
import { exec } from "child_process";
import validator from "src/assets/utils/validator";

export enum MigrationStatus {
  Ok = 0,
  Pending = 1,
  Applied = 2
}

async function runMigrations(command: string) {
  const execAsync = promisify(exec);
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    throw new Error(`Migration failed: ${(error as Error).message}`);
  }
}

async function migrations(request: NextApiRequest, response: NextApiResponse) {
  try {
    const reqToken = request.headers.authorization?.split(" ")[1];
    validator.validateToken(reqToken)

    const token = process.env.TOKEN

    if (reqToken != token) {
      throw Error("O token inserido é inválido. Por favor, tente novamente!")
      }

    if (request.method == "GET") {
      const statusCommand = 'npx prisma migrate status';
      const statusResult = await runMigrations(statusCommand);
      const findMigrations = statusResult.search("Database schema is up to date")
      if (findMigrations != -1) {
        return response.status(200).json({message: "Database schema is up to date", status: MigrationStatus.Ok})
      }
      else {
        return response.status(200).json({message: "Migrations pending...", status: MigrationStatus.Pending})
      }
    } 

    if (request.method == "POST") {      
      const deployCommand = 'npx prisma migrate deploy';
      const deployResult = await runMigrations(deployCommand);
      const findMigrations = deployResult.search("No pending migrations to apply.")
      const applyMigrations = deployResult.search("migrations have been successfully applied.")
      if (findMigrations != -1) {
        return response.status(200).json({message: "No pending migrations to apply.", status: MigrationStatus.Ok})
      }
      else if (applyMigrations != -1) {
        return response.status(200).json({message: "Migrations have been successfully applied.", status: MigrationStatus.Applied})
      }
      else {
        throw Error("Error during running migrations.")
      }
    }

    return response.status(405).json({message: "Invalid HTTP Method."})
  }
  catch (err) {
    const error = err as Error
    if (!error || error.message != "") {
      return response.status(500).json({message: error.message})
    }
    return response.status(500).json({message: 'Erro interno no servidor. Por favor, tente novamente mais tarde!'})
  }
  finally {
    prisma.$disconnect()
  }
} 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  migrations(req, res);
}