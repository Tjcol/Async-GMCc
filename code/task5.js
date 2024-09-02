// Simulated API fetch function
async function fetchFromUrl(url) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `Response from ${url}`;
  }
  
  // Async function to fetch data from an array of URLs
  async function parallelCalls(urls) {
    try {
      const fetchPromises = urls.map(url => fetchFromUrl(url));
      const responses = await Promise.all(fetchPromises);
      console.log('Responses:', responses);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Usage example
  parallelCalls(['http://example.com/1', 'http://example.com/2', 'http://example.com/3']);
  