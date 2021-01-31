const mongoose  = require('mongoose');
const CitySeeder = require('./seeders/CitySeeder');
const PharmacySeeder = require('./seeders/PharmacySeeder');
const mongoURL = "mongodb+srv://ELBEQQAL:fuck0675058801@cluster0.m7kbe.mongodb.net/pharmacies_db";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  CitySeeder,
  PharmacySeeder,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {
  seedersList,
  connect,
  dropdb,
}
