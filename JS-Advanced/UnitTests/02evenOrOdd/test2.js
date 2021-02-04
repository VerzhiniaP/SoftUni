
const { expect } = require('chai')
const isOddOrEven = require('./evenOrOdd')

describe("Tests for 02 tast", function () {

  describe('isOddOrEven', () => {
    it('argument should be a string', () => {
        expect(typeof isOddOrEven('30')).to.equal("string")
    })
    it('argument than is not a string', () => {
        expect(isOddOrEven(3)).to.be.undefined
    })

  })
  describe("Check the length", () => {
    it('should be even' , () => {
        expect(isOddOrEven('ab')).to.equal("even")
    })
    it('should be even' , () => {
        expect(isOddOrEven('a')).to.equal("odd")
    })
})
})