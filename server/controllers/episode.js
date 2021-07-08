const Episode = require('../../db/models/Episode');

exports.add = (req, res) => {
  let episode = req.body;

  const newEpisode = new Episode(episode);

  return newEpisode.save()
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};

exports.getAll = (req, res) => {
  return Episode.find({})
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};

exports.getOne = (req, res) => {
  let id = req.url.slice(req.url.lastIndexOf('/') + 1);

  return Episode.find({episodeId: id})
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};