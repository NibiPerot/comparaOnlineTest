module.exports = function(day){
    
    const sellInDays = (day) => {
        return day <= 0 ? day = 0 : day = day - 1 
    }
    return sellInDays(day)
}