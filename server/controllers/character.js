const Character = require('../../db/models/Character');

exports.add = (req, res) => {
  let character = req.body;

  const newCharacter = new Character(character);

  return newCharacter.save()
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};

exports.getAll = (req, res) => {
  return Character.find({})
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};