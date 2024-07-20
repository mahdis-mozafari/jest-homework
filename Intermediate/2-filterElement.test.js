const filterElement = require("./2-filterElement")

describe('filter element',()=>{
test('filter',()=>{
    const array=[4,5,5,2]
    expect(filterElement(array,5)).toEqual([5,5])
})
})