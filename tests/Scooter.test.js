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

  // test('instance static value incrementing', () => {
  //   const scooter2 = new Scooter('Kelvinhall');
  //   expect(scooter2.serial).toBe(scooter1.serial + 1);
  // });


});


//Method tests
describe('scooter methods', () => {
  // tests here!
  

  //rent method
  const scooter3 = new Scooter('St Enoch');
  test('rent method', () => {
    rent(), scooter3;

    // If the Scooter is charged above 20%
    expect(scooter3.charge).toBeGreaterThan(20);
    // and not broken,
    expect(scooter3.isBroken).toBe(false);
    //remove it from its station
    expect(scooter3.station).toBe(null);
    // check it out to user.
    expect(scooter3.user).toHaveProperty(!null);
  });

  // check method will throw an error if charge is below 20% or is broken
  const scooter4 = new Scooter('Hillhead');
  test('rent method with error', () => {
    // charge is below 20% 
    expect( () => (Scooter4.charge <= 20)).toThrowErr('scooter needs to charge');
    // scooter is broken
    expect(scooter4.isBroken = true).toThrowErr('scooter needs repair');

  });

  //dock method

  //requestRepair method

  //charge method

})
