import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const Modal = ({ type, setShowForm }) => {
  const [inputs, setInputs] = useState([]);
  const [values, setValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  let characterVals = [
    'Name',
    'Status',
    'Species',
    'Type',
    'Origin',
    'Location'
  ];

  let episodeVals = ['Name', 'Air date', 'Episode'];

  useEffect(() => {
    type === 'character' ? setInputs(characterVals) : setInputs(episodeVals);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/${type}s`, values)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    setValues({});
    setIsSubmitted(true);
  };

  return (
    <>
      <Styles.modalOverlay onClick={() => setShowForm(false)} />

      <Styles.modal background="rgb(35, 51, 81)">

        <form>
          {inputs.map(input => {
            return (
              <div key={input}>
                <label>
                  <Styles.displayText>
                    {input}:
                    <input
                      type="text"
                      value={values[input.toLowerCase()] || ''}
                      onChange={(e) => setValues(prev => {
                        let i = input.toLowerCase();
                        return {...prev, [i]: e.target.value};
                      })}
                      required
                    />
                  </Styles.displayText>
                </label>
              </div>
            );
          })}

          {type === 'character' && (
            <div>
              <Styles.displayText>
                <label>
                Character summary:
                  <input
                    type="textarea"
                    rows="10"
                    onChange={(e) => setValues(prev => {
                      return {...prev, summary: e.target.value};
                    })}
                  />
                </label>
              </Styles.displayText>
            </div>
          )}

          <input type="submit" onClick={handleSubmit} value="Submit" />

        </form>

        {isSubmitted && (
          <Styles.displayText>You did...ya know, the thing!</Styles.displayText>
        )}

      </Styles.modal>
    </>
  );
};

export default Modal;