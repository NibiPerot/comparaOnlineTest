module.exports = function(price){
    
    const specialFullCoverageLessThanFive = (price) => {
        price = price - 3
        price < 0 ? price = 0 : price 
        return price
    }
    return specialFullCoverageLessThanFive(price)
}