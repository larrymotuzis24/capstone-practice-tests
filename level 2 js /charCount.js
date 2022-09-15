const charCount = (str, letter) => {
    let letterCount = 0;
    for (let position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == letter) 
         {
         letterCount += 1;
         }
     }
     return letterCount;    
};

module.exports = charCount;

