// Simulated API fetch function with possible failure
async function fetchDataWithError() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate an error
    throw new Error('Failed to fetch data');
  }
  
  // Async function to await the API call and handle errors
  async function awaitCall() {
    try {
      const response = await fetchDataWithError();
      console.log('Data:', response.data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Usage example
  awaitCall();
  