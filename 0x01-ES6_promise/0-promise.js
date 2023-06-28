export default function getResponseFromAPI() {
<<<<<<< HEAD
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
=======
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming the API call is successful
      const response = {
        data: "Sample response data",
        status: 200
      };
>>>>>>> 612170b75e89be3cf989691f91a4d3aef5dc26ef

      resolve(response); // Resolving the Promise with the response data
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}
