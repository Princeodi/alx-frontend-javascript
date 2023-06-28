export default function getResponseFromAPI() {
<<<<<<< HEAD
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
=======
  return new Promise((resolve) => {
  
>>>>>>> aaa411bdca71628f1e46898ea0c9ccbbc165cb17
    setTimeout(() => {
      const response = {
        data: 'Sample response data',
        status: 200,
      };
=======
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Simulating an error condition
      const errorOccurred = true;
>>>>>>> dc9896db6a554cb5a4af3b70865e1f82ceca9c1f

      if (errorOccurred) {
        // Reject the Promise with an error message
        reject("An error occurred during the API call.");
      } else {
        // Assuming the API call is successful
        const response = {
          data: "Sample response data",
          status: 200
        };
  
        resolve(response); // Resolving the Promise with the response data
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}
