module.exports = function(number){

    const increaseTwo = (number) => {
        number = number + 2
        number > 50 ? number = 50 : number         
        return number
    }
    
    return increaseTwo(number)
}