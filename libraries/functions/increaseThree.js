module.exports = function(number){
    
    const increaseThree = (number) => {
        number = number + 3
        number > 50 ? number = 50 : number 
        return number
    }
    return increaseThree(number)
}