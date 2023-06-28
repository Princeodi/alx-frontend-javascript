function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Simulating an error condition
      const errorOccurred = true;

      if (errorOccurred) {
        // Reject the Promise with an error message
        reject('An error occurred during the API call.');
      } else {
        // Assuming the API call is successful
        const response = {
          data: 'Sample response data',
          status: 200,
        };

        resolve(response); // Resolving the Promise with the response data
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
=======
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
>>>>>>> f5ed258ea80fbc5438fd4e745ba81f6bdfc849e2
  });
}
export default getFullResponseFromAPI;
