module.exports = function(price){

    const specialFullCoverageFiveToTen = (price) => {
        price = price - 2
        price < 0 ? price = 0 : price 
        return price
    }
    
    return specialFullCoverageFiveToTen(price)
}