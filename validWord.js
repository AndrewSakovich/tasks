function validWord (obj) {
    const {dictionary, word} = obj;

   const localWord = dictionary.reduce((acc, currentValue)=> {
        while(acc.includes(currentValue)){
            acc = acc.replace(currentValue , '')
        }
        return acc
    }, word) 

  return !localWord  
};

module.exports.validWord = validWord