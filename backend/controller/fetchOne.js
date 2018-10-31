const NDF = require("../models/database");

const fetch = function(req, res) {
  NDF.findById(req.params.id, function(err, ndf) {
    if (err) {
      console.log(err);
    } else {
      res.send(ndf);
    }
  });
};

module.exports = fetch;
