// username, password, and age are provided to the constructor as arguments. loggedIn represents whether the user is currently logged in. A user is NOT logged in when they first register.

//username: String 
// password: String
// age: In years
// loggedIn: boolean
// login(password)
// logout()


const User = require('../src/User')

// User tests here

// describe("User integrity checks")

describe('User class integrity checks', () => {
    const user1 = new User('Buffy1', 'P4$$w0rd1', 29);
    test('instance has each property', () => {        
        // test username
        expect(user1.username).toBe('Buffy1');
        // test password
        expect(user1.password).toBe('P4$$w0rd1');
        // test age
        expect(user1.age).toBe(29);
    });

});


// test login

// test logout
