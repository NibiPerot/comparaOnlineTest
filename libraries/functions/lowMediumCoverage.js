module.exports = function(price){
    
    const lowMediumCoverage = (price) => {
        price <= 0 ? price = 0: price = price - 1
        return price 
    }
    
    return lowMediumCoverage(price)
}