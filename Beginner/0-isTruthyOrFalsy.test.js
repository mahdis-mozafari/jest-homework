const isTruthyOrFalsy = require("./0-isTruthyOrFalsy")

describe('truthy Or Falthy value',()=>{
    it('testing',()=>{
        expect(isTruthyOrFalsy(false)).toBeFalsy()
    })
})