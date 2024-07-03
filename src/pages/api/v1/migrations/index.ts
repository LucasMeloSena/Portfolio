import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/infra/prisma";
import { promisify } from "util";
import { exec } from "child_process";
import validator from "src/assets/utils/validator";

export enum MigrationStatus {
  Ok = 0,
  Pending = 1,
  Applied = 2,
}

interface ExecError extends Error {
  stdout: string;
  stderr: string;
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
    const err = error as ExecError;
    if (err.stdout.includes("have not yet been applied")) {
      return err.stdout;
    }

    throw new Error(`Migration failed: ${(error as Error).message}`);
  }
}

async function migrations(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method !== "GET" && request.method !== "POST") {
      return response.status(405).json({ message: "Invalid HTTP Method." });
    }

    const reqToken = request.headers.authorization?.split(" ")[1];
    validator.validateToken(reqToken);

    if (request.method == "GET") {
      const statusCommand = "npx prisma migrate status";
      const statusResult = await runMigrations(statusCommand);
      if (statusResult.includes("Database schema is up to date")) {
        return response
          .status(200)
          .json({
            message: "Database schema is up to date",
            status: MigrationStatus.Ok,
          });
      } else {
        return response
          .status(200)
          .json({
            message: "Migrations pending...",
            status: MigrationStatus.Pending,
          });
      }
    }

    if (request.method == "POST") {
      const deployCommand = "npx prisma migrate deploy";
      const deployResult = await runMigrations(deployCommand);
      const findMigrations = deployResult.search(
        "No pending migrations to apply.",
      );
      const applyMigrations = deployResult.search(
        "migrations have been successfully applied.",
      );
      if (findMigrations != -1) {
        return response
          .status(200)
          .json({
            message: "No pending migrations to apply.",
            status: MigrationStatus.Ok,
          });
      } else if (applyMigrations != -1) {
        return response
          .status(200)
          .json({
            message: "Migrations have been successfully applied.",
            status: MigrationStatus.Applied,
          });
      } else {
        throw Error("Error during running migrations.");
      }
    }
  } catch (err) {
    return response
      .status(500)
      .json({
        message:
          (err as Error).message ||
          "Erro interno no servidor. Por favor, tente novamente mais tarde!",
      });
  } finally {
    prisma.$disconnect();
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  migrations(req, res);
}
