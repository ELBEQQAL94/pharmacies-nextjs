const {Seeder} = require('mongoose-data-seed');
const City = require('../src/models/city.model');
const cities = require('../resources/City.json');

class CitySeeder extends Seeder {
    async shouldRun() {
      return City.countDocuments()
        .exec()
        .then(count => count === 0);
    }
   
    async run() {
      return City.create(cities);
    }
  }
   
module.exports = CitySeeder;