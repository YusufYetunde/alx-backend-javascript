export default function getFullResponseFromAPI(true) {
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
  return promise;
}
