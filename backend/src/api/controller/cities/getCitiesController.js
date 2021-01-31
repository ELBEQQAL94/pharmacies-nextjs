const City = require('../../../models/city.model');

const getCities = (req, res, next) => City.find()
  .then((cities) => {
    if (cities.length > 0) {
      res.status(200).json(cities);
    } else {
      res.status(200).json({
        message: 'Cities Note Found.',
      });
    }
  })
  .catch((err) => {
    const error = new Error(err);
    res.status(422);
    next(error);
  });

module.exports = getCities;