const express = require('express');

const router = express.Router();

const getPharmacyByCity = require('../controller/pharmacies/getPharmaciesByCityController');


// GET pharmacies based on city
router.get('/:city', getPharmacyByCity);

module.exports = router;
