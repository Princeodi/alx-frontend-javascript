export default function getResponseFromAPI() {
  return new Promise((resolve) => {
  
    setTimeout(() => {
     
      const response = {
        data: "Sample response data",
        status: 200
      };

      resolve(response);
    }, 2000);
  });
}
