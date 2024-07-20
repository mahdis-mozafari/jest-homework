const getUserWithDelay = require("./0-delayPromise")

describe('get user with delay',()=>{
    it('testing',async()=>{
        const user ={ id: 12, name: `User 12` }
        const res = await getUserWithDelay(12)
         expect(res).toStrictEqual({ 'id': 12, 'name': `User 12` })
    })
})