//letter counter 
//should return the correct number of letters in the string

const letterCounter = (string) => {
    let letterCounter = 0;
    for(let i = 0; i < string.length; i++){
        letterCounter++
    }
    return letterCounter
};

module.exports = letterCounter;