import { exec } from "node:child_process";

function checkPostgres() {
  const command =
    "docker exec postgres-dev-portfolio pg_isready -h localhost -p 5432 -U docker -d portfolio";

  exec(command, (error, stdout) => {
    if (error != null) {
      console.log("Erro de identificação do docker container.");
      return;
    } else if (stdout.search("accepting connections") === -1) {
      checkPostgres();
      console.log("🔴 Aguardando Postgres Aceitar Conexões...");
      return;
    }

    console.log("🟢 Postgres Aceitando Conexões...");
  });
}

checkPostgres();
