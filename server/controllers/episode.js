const Episode = require('../../db/models/Episode');

exports.addEpisode = (req, res) => {
  let episode = req.body;

  const newEpisode = new Episode(episode);

  return newEpisode.save()
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};

exports.getAllEpisodes = (req, res) => {
  return Episode.find({})
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.send();
    });
};