import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ type, id }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`/${type}/${id}`)
      .then(res => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
    </>
  );
};

export default Modal;