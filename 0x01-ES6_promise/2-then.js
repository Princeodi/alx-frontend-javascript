function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('Got a response from the API'));
  });
}

export default getFullResponseFromAPI;
