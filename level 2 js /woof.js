//write a test to check that woof returns
//if we pass 3 into woof, it shuld return a string 'woof woof woof'
//a string value passed into the argument should return null

const woof = (num) => {
    if(typeof num === 'string'){
        return null
    }
    else {
        const woofStr = [];
        for(let i = num; i > 0; i-- ){
            woofStr.push('woof')
        }
        return woofStr.join(' ')

    }
}

module.exports = woof;