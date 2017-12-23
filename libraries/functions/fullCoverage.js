module.exports = function(price){

    const fullCoverage = (price) => {
        price == 0 ? price = 0: price = price + 2
        return price
    }

    return fullCoverage(price)
}