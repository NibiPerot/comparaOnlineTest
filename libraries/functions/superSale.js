module.exports = function(price){
    
    const superSale = (price) => {
        price = price - 2
        price < 0 ? price = 0 : price 
        return price
    }
    
    
    return superSale(price)
}
