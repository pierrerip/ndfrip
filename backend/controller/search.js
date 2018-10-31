const NDF = require("../models/database");

const search = function(req, res) {
  NDF.find(
    { name: { $regex: ".*" + req.params.term + ".*", $options: "i" } },
    function(err, ndfs) {
      if (err) throw err;
      res.json(ndfs);
    }
  ).sort({ nom: 1 });
};

module.exports = search;
