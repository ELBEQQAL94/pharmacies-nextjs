const mongoose = require('mongoose');

const pharmacySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: String,
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});

const Pharmacy = mongoose.model('pharmacy', pharmacySchema);

module.exports = Pharmacy;
