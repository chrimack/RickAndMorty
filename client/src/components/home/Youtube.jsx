import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import { token } from '../../../../config.js';

const Youtube = () => {
  const [embedId, setEmbedId] = useState();

  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgPClNr5VSYC3syrDUIlzLw&maxResults=1&order=date&q=rick%20and%20morty&key=${token}`)
      .then(res => {
        setEmbedId(res.data.items[0].id.videoId);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <iframe
        width="500"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        align="right"
      />
    </>
  );
};

export default Youtube;
