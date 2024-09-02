// Helper function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Async function to iterate over an array with a delay
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await delay(1000); // Wait for 1 second
    }
  }
  
  // Usage example
  iterateWithAsyncAwait(['apple', 'banana', 'cherry']);
  