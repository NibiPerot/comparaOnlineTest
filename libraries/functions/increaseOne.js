module.exports = function(number){

    const increaseOne = (number) => {
        number = number + 1
        number > 50 ? number = 50 : number         
        return number 
    }
    return increaseOne(number)
}