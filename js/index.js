/**
 * Example of Products Object
 * Added coverage properties to handle coverage
 *  without need of asking to compare strings
 *   coverage codes : 
 *      id = 1 => Low Coverage
 *      id = 2 => Medium Coverage
 *      id = 3 => Full Coverage
 *      id = 4 => Mega Coverage
 *      id = 5 => Special Full Coverage
 *      id = 6 => Super Sale Coverage
 */
let products = [
    { coverage: 2, name : 'Medium', sellIn: 10, price: 2},
    { coverage: 3, name : 'Full Coverage', sellIn: 2, price: 0},
    { coverage: 1, name : 'Low Coverage', sellIn: 5, price: 7},
    { coverage: 4, name : 'Mega Coverage', sellIn: -1, price: 80},
    { coverage: 5, name : 'Special full Coverage', sellIn: 15, price: 20},
    { coverage: 5, name : 'Special full Coverage', sellIn: 10, price: 20},
    { coverage: 5, name : 'Special full Coverage', sellIn: 5, price: 20},
    { coverage: 6, name : 'Super Sale', sellIn: 3, price: 6}
]

/**
 * jQuery function to see the result table for first time 
 */
$('.start button').click(function(){
    $('.start').hide()
    $('.second').show()
})

/**
 * Start at day zero to start changing values of 
 * product's properties according to bussiness rules
 */
let day = 0


/**
 * Pure function to increment day on one 
 *  
 */
const addDay = number => number + 1


/**
 * Pure function decrease number in one and not allow negative numbers 
 */
const decreaseOne = (number) => {
    number = number - 1 
    number <= 0 ? number = 0 : number
    return number
}

/**
 * Pure function decrease number in two and not allow negative numbers 
 */
const decreaseTwo = (number) => {
    number = number -2
    number <= 0 ? number = 0 : number
    return number
}

/**
 * Pure function increase number in one  and do not allow numbers 
 * validating that number is lower than 51
 */
const increaseOne = (number) => {
    number = number + 1
    number > 50 ? number = 50 : number         
    return number 
}

/**
 * Pure function increase number in two  and do not allow numbers 
 * validating that number is lower than 51
 */
const increaseTwo = (number) => {
    number = number + 2
    number > 50 ? number = 50 : number     
    return number
}

/**
 * Pure function increase number in three  and do not allow numbers 
 * validating that number is lower than 51
 */
const increaseThree = (number) => {
    number = number + 3
    number > 50 ? number = 50 : number     
    return number
}


/**
 * Pure function to handle Mega Coverage bussiness rules, 
 * this function use product's price to handle their properties
 */
const returnSame = number => number


/**
 * Pure function to return zero any time 
 */
const returnZero = number => 0


/**
 * Function to handle Special Full Coverage bussiness rules, 
 * this function use product to handle their properties
 */
const specialFullCoverage = (product) => {
    if(product.sellIn > 10 && product.price != 0){
        product.price = increaseOne(product.price)
    }else{
        if(product.sellIn == 0 ){
            product.price = returnZero(product.price)
        }else{
            product.sellIn < 5 ? product.price = increaseThree(product.price) 
                               : product.price = increaseTwo(product.price)
        }
    }
    return product 
}


/**
 * Function to render elements on view
 * using jQuery function append()
 */
const showUpdatedProducts = (products, day) => {
    $('h2').empty()
    $('tbody').empty()
    $('h2').append('Day ' + day)

    products.map( product => {
        $('tbody').append('<tr><td>' + product.name + '</td><td>' + product.sellIn + '</td><td>' + product.price + '</td></tr>')
             
    })
}


/**
 * Core function that update prices on every product 
 * using underscorejs function _.map() to fetch products
 */
const updatePrice = (products) => {
    $('.container.second').show()
    products.map( product => {

        product.coverage == 4 ? product.sellIn = product.sellIn 
                              : product.sellIn = decreaseOne(product.sellIn)
        /**
         * Check products according to their coverage value,
         * the coverage is going to call their bussiness rules and change  
         * value of product price and product sellIn if needed
         */
        
        switch(product.coverage) {
            case 1:
                product.price = decreaseOne(product.price)
                break;
            case 2:
                product.price = decreaseOne(product.price)
                break;
            case 3:
                product.price = addDay(product.price)          
                break;
            case 4:
                product.price = returnSame(product.price)
                break;
            case 5:
                product = specialFullCoverage(product)
                break;
            case 6:
                product.price = decreaseTwo(product.price)    
                break;

            default:
                console.log('not a valid product coverage number')
        }
    })
    
    //Increment day vairable
    day = addDay(day)
    showUpdatedProducts(products, day)
}