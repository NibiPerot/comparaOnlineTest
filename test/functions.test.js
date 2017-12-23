var addDay = require('../libraries/functions/addDay')
var decreaseOne = require('../libraries/functions/decreaseOne')
var decreaseTwo = require('../libraries/functions/decreaseTwo')
var increaseOne = require('../libraries/functions/increaseOne')
var increaseTwo = require('../libraries/functions/increaseTwo')
var increaseThree = require('../libraries/functions/increaseThree')
var returnZero = require('../libraries/functions/returnZero')
var returnSame = require('../libraries/functions/returnSame')


var expect = require('chai').expect

describe('#addDay', function(){
    it("return day number succesor ", function(){
        expect(addDay(0)).to.equal(1)
        expect(addDay(5)).to.equal(6)
    })
})

describe('#decreaseOne', function(){
    it("decrese number in one if zero then return zero", function(){
        expect(decreaseOne(4)).to.equal(3)
        expect(decreaseOne(0)).to.equal(0)
        expect(decreaseOne(-1)).to.equal(0)
    })
})

describe('#decreaseTwo', function(){
    it("decrese number in two if zero then return zero", function(){
        expect(decreaseTwo(4)).to.equal(2)
        expect(decreaseTwo(0)).to.equal(0)
        expect(decreaseTwo(-1)).to.equal(0)
    })
})

describe('#increaseOne', function(){
    it("increse number in one, the number is equal or lower than 50", function(){
        expect(increaseOne(49)).to.equal(50)
        expect(increaseOne(50)).to.equal(50)
    })
})

describe('#increaseTwo', function(){
    it("increse number in two, the number is equal or lower than 50", function(){
        expect(increaseTwo(48)).to.equal(50)
        expect(increaseTwo(50)).to.equal(50)
    })
})

describe('#increaseThree', function(){
    it("increse number in three, the number is equal or lower than 50", function(){
        expect(increaseThree(47)).to.equal(50)
        expect(increaseThree(50)).to.equal(50)
    })
})

describe('#returnZero', function(){
    it("Return zero in any case", function(){
        expect(returnZero(2)).to.equal(0)
    })
})

describe('#returnSame', function(){
    it("doesn't change the value that enter to function", function(){
        expect(returnSame('hola')).to.equal('hola')
    })
})