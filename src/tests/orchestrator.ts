import retry from "async-retry";

async function waitForAllServices() {
  const fetchStatusPage = async () => {
    const url = "http://localhost:3000/api/v1/status";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(`HTTP Error ${response.status}`);
      }
      await response.json();
    } catch (err) {
      throw err;
    }
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

export default {
  waitForAllServices,
};
