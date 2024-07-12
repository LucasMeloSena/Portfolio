import retry from "async-retry";
import { MigrationStatus } from "src/pages/api/v1/migrations";

async function waitForAllServices() {
  const fetchStatusPage = async () => {
    const url = "http://localhost:3000/api/v1/status";

    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`HTTP Error ${response.status}`);
    }
    await response.json();
  };

  const waitForWebServer = async () => {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
      onRetry: (error, attempt) => {
        console.log(
          `Attempt ${attempt} - Failed to fetch status page: ${error.message}`,
        );
      },
    });
  };

  await waitForWebServer();
}

async function waitForMountedDatabase() {
  const playMigrations = async () => {
    const url = "http://localhost:3000/api/v1/migrations";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status == MigrationStatus.Pending) {
      throw Error("Waiting for complete migrations.");
    }
  };

  const waitForMigrations = async () => {
    return retry(playMigrations, {
      retries: 100,
      maxTimeout: 1000,
      onRetry: (error, attempt) => {
        console.log(
          `Attempt ${attempt} - Failed to load migrations: ${error.message}`,
        );
      },
    });
  };

  await waitForMigrations();
}

const orchestrator = {
  waitForAllServices,
  waitForMountedDatabase,
};

export default orchestrator;
