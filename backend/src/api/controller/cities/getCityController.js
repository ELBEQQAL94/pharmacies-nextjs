const City = require("../../../models/city.model");

const getCity = (req, res, next) => {
  return City.findOne({ name: req.params.name })
    .then((city) => {
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(200).json({
          message: "Cities Note Found.",
        });
      }
    })
    .catch((err) => {
      const error = new Error(err);
      res.status(422);
      next(error);
    });
};

module.exports = getCity;
