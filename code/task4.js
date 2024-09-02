// Simulated API fetch functions
async function fetchData1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: 'Data from API 1' };
  }
  
  async function fetchData2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: 'Data from API 2' };
  }
  
  // Async function to await concurrent requests and log results
  async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log('Results:', result1.data, result2.data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Usage example
  concurrentRequests();
  