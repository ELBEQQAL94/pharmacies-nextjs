const Pharmacy = require('../../../models/pharmacy.model');

const uppercaseFirstLetter = require('../../../../helpers/uppercaseFirstLetter');

const getPharmacyByCity = async(req, res, next) => {

    const city = uppercaseFirstLetter(req.params.city);

    let { limit = 6, page = 1 } = req.query;

    const count = await Pharmacy.countDocuments({city});

    const pharmacies = Pharmacy.find({city})
        .limit(limit * 1)
        .skip((page - 1) * limit);

        pharmacies.exec(function (error, results) {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
        res.json({
            total_elements: count,
            total_pages: Math.ceil(count / limit),
            current_page: +page,
            results,
        });
    });
};

module.exports = getPharmacyByCity;
