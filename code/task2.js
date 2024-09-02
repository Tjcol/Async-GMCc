// Simulated API fetch function
async function fetchData() {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: 'Sample Data' };
  }
  
  // Async function to await the API call and log data
  async function awaitCall() {
    try {
      const response = await fetchData();
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Usage example
  awaitCall();
  