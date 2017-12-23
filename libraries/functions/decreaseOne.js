module.exports = function(number){
    
    const decreaseOne = (number) => {
        number = number - 1 
        number <= 0 ? number = 0 : number
        return number
    }
    return decreaseOne(number)
}