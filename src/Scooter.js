const User = require('./User')
const ScooterApp = require("./ScooterApp");

class Scooter{
  // scooter code here

  // Scooter class has  dock method

  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent() {

    if (this.charge > 20 && this.isBroken == false && this.user == null) {
      //isn't returning correct username
      this.user = User.username;
      this.station = null;
    } else if (this.charge < 21) {
      throw new Error('scooter needs to charge');
    } else if (this.isBroken == true) {
      throw new Error('scooter needs repair');
    };

  };

  // dock() {
    
  // };

};

module.exports = Scooter;
