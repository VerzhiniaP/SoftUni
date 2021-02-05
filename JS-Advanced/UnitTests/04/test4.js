const { expect } = require('chai')
const mathEnforcer = require('./math')

describe('mathEnforcer', () =>{
   
    describe('addFive', ()=> {
        it('should return correct result with non-number parameter' , ()=>{
          expect(mathEnforcer.addFive("str")).to.be.undefined
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.addFive(1)).to.equal(6)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.addFive(1.5)).to.equal(6.5)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.addFive(0)).to.equal(5)
        })

    })
    describe('subtractTen', ()=> {
        it('should return correct result with a non-number parameter', () =>{
        expect(mathEnforcer.subtractTen("str")).to.be.undefined
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
        })
        it('should return result if it is a number' , () => {
            expect(mathEnforcer.subtractTen(1.5)).to.equal(-8.5)
        })


    })
    describe('sum', () => {
        it('should return correct result with a non- number parameter', ()=> {
        expect(mathEnforcer.sum("str",1)).to.be.undefined
        })
        it('should return correct result with a non- number parameter', ()=> {
            expect(mathEnforcer.sum("str","abv")).to.be.undefined
        })
        it('should return correct result with a non- number parameter', ()=> {
            expect(mathEnforcer.sum(1,"abv")).to.be.undefined
        })
        it('should return the sum of two numbers', ()=> {
            expect(mathEnforcer.sum(1,3)).to.equal(4)
        })
        it('should return the sum of two numbers', ()=> {
            expect(mathEnforcer.sum(1,-3)).to.equal(-2)
        })
        it('should return the sum of two numbers', ()=> {
            expect(mathEnforcer.sum(1.5,2.5)).to.equal(4)
        })
        it('should return the sum of two numbers', ()=> {
            expect(mathEnforcer.sum(0,3)).to.equal(3)
        })

    })
})