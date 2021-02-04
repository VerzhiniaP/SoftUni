const { expect } = require('chai')
const lookupChar = require('./char')

describe('Tests for lookupChar task', ()=> {
   
    it('checks for incorrect parameters', () => {
        expect(lookupChar("text","char")).to.be.undefined
    })
    it('checks for incorrect parameters', () => {
        expect(lookupChar(1,2.5)).to.be.undefined
    })
    it('checks for incorrect parameters', () => {
        expect(lookupChar("char", 3.1)).to.be.undefined
    })

    it('check for negative index' , () => {
        expect(lookupChar("str",-1)).to.equal('Incorrect index')
    })
    it('check for negative index' , () => {
        expect(lookupChar("str",3)).to.equal('Incorrect index')
    })

    it('check for correct result' , () => {
        expect(lookupChar("str", 2)).to.equal('r')
    })
    it('check for correct result' , () => {
        expect(lookupChar("str", 0)).to.equal('s')
    })
    
})