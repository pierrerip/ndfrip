const NDF = require("../models/database");

const remove = function(req, res) {
  NDF.findByIdAndRemove(req.params.id, function(err, ndf) {
    if (err) {
      console.log(err);
    } else {
      res.send("ndf removed");
    }
  });
};

module.exports = remove;
