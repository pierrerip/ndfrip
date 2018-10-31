const NDF = require("../models/database");

const create = function(req, res) {
  let newNDF = new NDF({
    nom: req.body.name
  });
  NDF.create(newNDF, function(err, ndf) {
    if (err) {
      console.log(err);
    } else {
      res.send(ndf);
    }
  });
};

module.exports = create;
