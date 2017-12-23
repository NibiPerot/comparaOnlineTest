module.exports = function(price){
    
    const specialFullCoverageMoreThanTen = (price) => {
        price <= 0 ? price = 0: price = price - 1
        return price
    }
    
    return specialFullCoverageMoreThanTen(price)
}