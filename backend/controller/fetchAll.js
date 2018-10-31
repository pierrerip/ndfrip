const NDF = require("../models/database");

const fetchAll = function(req, res) {
  NDF.find({}, function(err, ndf) {
    if (err) throw err;
    res.json(ndf);
  }).sort({ nom: 1 });
};

module.exports = fetchAll;
