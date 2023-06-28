export default function getResponseFromAPI() {
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

      resolve(response);
    }, 2000);
  });
}
