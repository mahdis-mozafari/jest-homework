const checkAge = require("./0-checkAge")

describe('check age',()=>{
    it('age',()=>{
        expect(checkAge(20)).toBe("You are eligible")
    })
})