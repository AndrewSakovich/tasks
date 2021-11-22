function createSecretHolder(secret) {
  let resSecret = secret;
  const setSecret = (secret) => {
    resSecret = secret;
  };

  const getSecret = () => {
    return resSecret;
  };

  const obj = {
    secret,
    getSecret,
    setSecret,
  };

  return obj;
}

const b = createSecretHolder(5);

console.log("1:", b.getSecret());
b.setSecret(7);
console.log("2:", b.getSecret());

// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

// function createSecretHolder(secret) {

//     const setSecret = function (secret) {
//       this.secret = secret
//     };

//     const getSecret = function() {

//       return this.secret;
//     };

//     const obj = {
//       secret,
//       getSecret,
//       setSecret,
//     };

//     return obj
//   }

//   const b = createSecretHolder(5);

//   console.log("1:", b.getSecret());
//   b.setSecret(7);
//   console.log("2:", b.getSecret());
