const Location = require('../../db/models/Location');

exports.add = (req, res) => {
  let location = req.body;

  const newLocation = new Location(location);

  return newLocation.save()
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};