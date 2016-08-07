function addPromise(a,b) {
  return new Promise(function(resolve, reject){
    if(typeof a != 'number')
      reject('The first argument is not a number');
    if(typeof b != 'number')
      reject('The second argument is not a number');

    resolve(a + b);
  });
}

addPromise(5, 9).then(function(res){
  console.log("el resultado fue: " + res);
},function(err){
  console.log('Error: ',err);
});

addPromise('5', 9).then(function(res){
  console.log("el resultado fue: " + res);
},function(err){
  console.log('Error: ',err);
});
