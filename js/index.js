/**
 * Pure function to ensure not negative days and
 * update days associated to product's sellIn property 
 */
const sellInDays = (day) => {
    return day <= 0 ? day = 0 : day = day - 1 
}

/**
 * Pure function to handle Mega Coverage bussiness rules, 
 * this function use product's price to handle their properties
 */
const megaCoverage = price => price

/**
 * Pure function to handle Full Coverage bussiness rules, 
 * this function use product's price to handle their properties
 */
const fullCoverage = (price) => {
    price == 0 ? price = 0: price = price + 2
    return price
}

/**
 * Pure function to handle Low and Medium Coverage bussiness rules, 
 * this function use product's price to handle their properties
 */
const lowMediumCoverage = (price) => {
    price <= 0 ? price = 0: price = price - 1
    return price 
}


/**
 * Pure function to handle when price is zero
 *  in case of Special Full Coverage 
 */
const specialFullCoverageZero = price => 0

/**
 * Pure function to handle when price more than 10
 *  in case of Special Full Coverage 
 */
const specialFullCoverageMoreThanTen = (price) => {
    price == 0 ? price = 0: price = price - 1
    return price
}

/**
 * Pure function to handle when price less than 5 but
 * more than 0 in case of Special Full Coverage 
 */
const specialFullCoverageLessThanFive = (price) => {
    price = price - 3
    price < 0 ? price = 0 : price 
    return price
}

/**
 * Pure function to handle when price is between 5 and 10
 *  in case of Special Full Coverage 
 */
const specialFullCoverageFiveToTen = (price) => {
    price = price - 2
    price < 0 ? price = 0 : price 
    return price
}

/**
 * Function to handle Special Full Coverage bussiness rules, 
 * this function use product to handle their properties
 */
const specialFullCoverage = (product) => {
    if(product.sellIn > 10 && product.price != 0){
        product.price = specialFullCoverageMoreThanTen(product.price)
    }else{
        if(product.sellIn == 0 ){
            product.price = specialFullCoverageZero(product.price)
        }else{
            product.sellIn < 5 ? product.price = specialFullCoverageLessThanFive(product.price) 
                               : product.price = specialFullCoverageFiveToTen(product.price)
        }
    }
    return product 
}

/**
 * Pure function to handle Super Sale Coverage bussiness rules, 
 * this function use product's price to handle their properties
 */
const superSale = (price) => {
    price == 0 ? price = 0: price = price - 2
    return price
}

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
    { coverage: 5, name : 'Special full Coverage', sellIn: 10, price: 49},
    { coverage: 5, name : 'Special full Coverage', sellIn: 5, price: 49},
    { coverage: 6, name : 'Super Sale', sellIn: 3, price: 6}
]

/**
 * Start at day zero to start changing values of 
 * product's properties according to bussiness rules
 */
let day = 0

/**
 * Function to render elements on view
 * using jQuery function append()
 */
const showUpdatedProducts = (products, day) => {
    $('#products').append('<h3>Day ' + day + '</h3>')

    products.map( product => {
        $('#products').append('<p>'+ product.name + ' , '+ product.sellIn + ' , '+ product.price +' </p>')        
    })
}

/**
 * Pure function to increment day on one 
 *  
 */
const addDay = day => day + 1


/**
 * Core function that update prices on every product 
 * using underscorejs function _.map() to fetch products
 */
const updatePrice = (products) => {
    products.map( product => {

        product.coverage == 4 ? product.sellIn = product.sellIn 
                              : product.sellIn = sellInDays(product.sellIn)
        /**
         * Check products according to their coverage value,
         * the coverage is going to call their bussiness rules and change  
         * value of product price and product sellIn if needed
         */
        
        switch(product.coverage) {
            case 1:
                product.price = lowMediumCoverage(product.price)
                break;
            case 2:
                product.price = lowMediumCoverage(product.price)            
                break;
            case 3:
                product.price = fullCoverage(product.price)            
                break;
            case 4:
                product.price = megaCoverage(product.price)            
                break;
            case 5:
                product = specialFullCoverage(product)            
                break;
            case 6:
                product.price = superSale(product.price)            
                break;

            default:
                console.log('not a valid product coverage')
        }
    })
    
    //Increment day vairable
    day = addDay(day)
    showUpdatedProducts(products, day)
}

/**
 * Functional Programming
 * Pure Functions all that it does depends on their arguments, guarantee alway get the same
 * result if i put the same 
 * Safe State
 * First Class State
 * Modularity
 */