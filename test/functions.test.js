var megaCoverage = require('../libraries/functions/megaCoverage')
var fullCoverage = require('../libraries/functions/fullCoverage')
var sellInDays = require('../libraries/functions/sellInDays')
var lowMediumCoverage = require('../libraries/functions/lowMediumCoverage')
var specialFullCoverageZero = require('../libraries/functions/specialFullCoverageZero')
var specialFullCoverageMoreThanTen = require('../libraries/functions/specialFullCoverageMoreThanTen')
var specialFullCoverageLessThanFive = require('../libraries/functions/specialFullCoverageLessThanFive')
var specialFullCoverageFiveToTen = require('../libraries/functions/specialFullCoverageFiveToTen')
var superSale = require('../libraries/functions/superSale')


var expect = require('chai').expect
describe('#megaCoverage', function(){
    it("doesn't change the value that enter to function", function(){
        expect(megaCoverage('hola')).to.equal('hola')
    })
})

describe('#fullCoverage', function(){
    it("add 2 to a number", function(){
        expect(fullCoverage(2)).to.equal(4)
    })
})

describe('#sellInDays', function(){
    it("decrese number in one if zero then return zero", function(){
        expect(sellInDays(4)).to.equal(3)
        expect(sellInDays(0)).to.equal(0)
        expect(sellInDays(-1)).to.equal(0)
    })
})


describe('#lowMediumCoverage', function(){
    it("decrese number in one if zero then return zero", function(){
        expect(lowMediumCoverage(4)).to.equal(3)
        expect(lowMediumCoverage(0)).to.equal(0)
        expect(lowMediumCoverage(-1)).to.equal(0)
    })
})

describe('#specialFullCoverageZero', function(){
    it("Return zero in any case", function(){
        expect(specialFullCoverageZero(2)).to.equal(0)
    })
})

describe('#specialFullCoverageMoreThanTen', function(){
    it("decrese number in one if zero then return zero", function(){
        expect(specialFullCoverageMoreThanTen(4)).to.equal(3)
        expect(specialFullCoverageMoreThanTen(0)).to.equal(0)
        expect(specialFullCoverageMoreThanTen(-1)).to.equal(0)
    })
})

describe('#specialFullCoverageLessThanFive', function(){
    it("decrese number in three if zero then return zero", function(){
        expect(specialFullCoverageLessThanFive(4)).to.equal(1)
        expect(specialFullCoverageLessThanFive(2)).to.equal(0)
        expect(specialFullCoverageLessThanFive(3)).to.equal(0)
    })
})

describe('#specialFullCoverageFiveToTen', function(){
    it("decrese number in two if zero then return zero", function(){
        expect(specialFullCoverageFiveToTen(4)).to.equal(2)
        expect(specialFullCoverageFiveToTen(0)).to.equal(0)
        expect(specialFullCoverageFiveToTen(3)).to.equal(1)
    })
})

describe('#superSale', function(){
    it("decrese number in two if zero then return zero", function(){
        expect(superSale(4)).to.equal(2)
        expect(superSale(0)).to.equal(0)
        expect(superSale(3)).to.equal(1)
    })
})

