
console.log('$$$', createFunctions)

  function createFunctions (n) {
  console.log(i)
    let  callbacks = [];
  
    for (var i = 0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }

    return callbacks;
  }

  const callbacks = createFunctions(3)


  console.log('$$', callbacks[2])
  console.log('res1:', callbacks[1]())
  console.log('res0:', callbacks[0]())
  console.log('res2:', callbacks[2]())
 