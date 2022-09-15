//write a test to check that the function
//returns true if the string contains the letter passed in

const includesLetter = (str, letter) => {
    if(str.toLowerCase().includes(letter.toLowerCase())){
        return true
    }
    else {
       return false
    }
};

module.exports = includesLetter;