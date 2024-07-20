const getAverage = require("./1-getAverage")

describe('get avarage',()=>{
    it('avarage',()=>{
        expect(getAverage(5,5,5)).toBe(5)
    })
}
)