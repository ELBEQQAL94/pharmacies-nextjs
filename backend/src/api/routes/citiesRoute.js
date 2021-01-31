const express = require('express');

const router = express.Router();

const getCities  = require('../controller/cities/getCitiesController');
const getCity = require('../controller/cities/getCityController');

// GET all cities
router.get('/', getCities);

// GET one city
router.get('/:name', getCity);

module.exports = router;
