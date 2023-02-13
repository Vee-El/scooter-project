const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter class integrity checks', () => {
  const scooter1 = new Scooter('Buchanan Street');
  


  test('instance has each property', () => {
    // edit this to be a real test!
    expect(scooter1).toHaveProperty('user', null);
    expect(scooter1).toHaveProperty('charge');
    expect(scooter1).toHaveProperty('serial');
    expect(typeof scooter1.isBroken).toBe('boolean');
    expect(scooter1.station).toBe('Buchanan Street');
  });

  // // Only works if other code blocked out.
  // test('instance static value incrementing', () => {
  //   const scooter2 = new Scooter('Kelvinhall');
  //   expect(scooter2.serial).toBe(scooter1.serial + 1);
  // });


});


//Method tests
describe('scooter methods', () => {
  // tests here!
  

  //rent method

  test('rent method', () => {
    const newUser1 = new User('Willow', 'M@g1c', 28);
    const scooter3 = new Scooter('St Enoch');
    // If the Scooter is charged above 20%
    expect(scooter3.charge).toBeGreaterThan(20);
    // and not broken
    expect(scooter3.isBroken).toBe(false);
    //remove it from its station - returns 'St Enoch'
    expect(scooter3.station).toBe(null);
    // check it out to user - returns 'null'
    expect(scooter3.user).toBe(newUser1.username);

  });

  // check method will throw an error if charge is below 20% or is broken
  test('rent method with error', () => {
  const newUser2 = new User('Angel', '$un$et1', 377);
  const scooter4 = new Scooter('Hillhead');
  scooter4.charge = 4;  
    // charge is below 20% 
    expect(() => (scooter4.rent(newUser2))).toThrow('scooter needs to charge');
    // scooter is broken
    const scooter5 = new Scooter('Kelvin Bridge');
    scooter5.isBroken = true;
    expect(() => (scooter5.rent(newUser2))).toThrow('scooter needs repair');

  });

  //dock method

  //requestRepair method

  //charge method

});
