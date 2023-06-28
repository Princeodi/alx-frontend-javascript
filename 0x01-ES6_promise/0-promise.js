export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming the API call is successful
      const response = {
        data: "Sample response data",
        status: 200
      };

      resolve(response); // Resolving the Promise with the response data
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}
