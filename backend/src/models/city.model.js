const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: String
});

const City = mongoose.model('city', citySchema);

module.exports = City;
