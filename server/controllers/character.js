const Character = require('../../db/models/Character');
const path = require('path');

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

exports.getOne = (req, res) => {
  let id = req.url.slice(req.url.lastIndexOf('/') + 1);

  return Character.find({ _id: id })
    .then(response => res.send(response))
    .catch((e) => {
      console.log(e);
      res.send();
    });
};

exports.findAndUpdate = (req, res) => {
  let id = req.body._id;
  // let query = { _id: id };
  let update = {
    name: req.body.name,
    summary: req.body.summary
  };
  let options = {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true
  };

  return Character.findByIdAndUpdate(id, update, options)
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};