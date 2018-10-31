const Recipe = require("../models/database");

const update = function(req, res) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, ndf) {
    if (err) {
      console.log(err);
    } else {
      res.send(ndf);
    }
  });
};

module.exports = update;
