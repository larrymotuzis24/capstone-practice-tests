//write a test that tipCalculator returns
//if our total is 20 dollars and we tipping 15%
//returns the total without tip if no tipPercent is passed in   

const tipCalculator = (total, tipPrecent) => {
    if(!tipPrecent){
        return total
    }
    else {
        const tip = total * tipPrecent
        return total + tip
    }
};

module.exports = tipCalculator;

