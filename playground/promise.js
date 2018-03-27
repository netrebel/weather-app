var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Either resolve or reject, can't do both. They cna only be called once!
    // resolve('Hey, it worked!');
    reject('Unable to fulfill promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
