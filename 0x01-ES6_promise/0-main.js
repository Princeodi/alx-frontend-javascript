import getResponseFromAPI from "./0-promise.js";

getResponseFromAPI()
  .then(response => {
    console.log(response.data); // Accessing the response data
    console.log(response.status); // Accessing the response status
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
