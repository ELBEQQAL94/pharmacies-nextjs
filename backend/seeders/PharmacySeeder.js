const {Seeder} = require('mongoose-data-seed');
const Pharmacy = require('../src/models/pharmacy.model');
const pharmacies = require('../pharmacies.json');

class PharmacySeeder extends Seeder {
    async shouldRun() {
      return Pharmacy.countDocuments()
        .exec()
        .then(count => count === 0);
    }

    async run() {
      return Pharmacy.create(pharmacies);
    }
  }
   
module.exports = PharmacySeeder;