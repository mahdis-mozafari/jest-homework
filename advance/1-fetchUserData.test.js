const fetchUserData = require('./1-fetchUserData');
const mocData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { "lat": "-37.3159", "lng": "81.1496" }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

  describe('test fetch and id user',()=>{
    
    it('testing',async()=>{
        const data = await fetchUserData(1)
        expect(data).toEqual(mocData)
    })
  })