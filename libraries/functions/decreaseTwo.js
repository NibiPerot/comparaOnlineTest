module.exports = function(number){
    const decreaseTwo = (number) => {
        number = number -2
        number <= 0 ? number = 0 : number
        return number
    }
    return decreaseTwo(number)
}