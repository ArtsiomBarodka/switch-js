async function fetchDataFromAPI(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function main() {
  try {
    const url = "https://sports.api.decathlon.com/sports";
    const data = await fetchDataFromAPI(url);
    console.log("Data:", data);
  } catch (error) {
    console.error("Main function encountered an error:", error);
  }
}

main();
