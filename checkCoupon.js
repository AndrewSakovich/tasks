
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const examDate = new Date(expirationDate)
    const date = new Date(currentDate)
    if(enteredCode!==correctCode || date>examDate){
        return false
    }
    
    return true 
}
 