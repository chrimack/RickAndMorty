import React from 'react';
import * as Styles from '../../../styles/styles.js';

const Modal = ({ type, setShowForm }) => {


  return (
    <>
      <Styles.modalOverlay onClick={() => setShowForm(false)} />

      <Styles.modal background="rgb(35, 51, 81)">
        <form>
          <label>
            Name:
            <input type="text" required />
          </label>

          {type === 'character' && (
            <>
              <label>
                Status:
                <input type="text" required />
              </label>
              <label>
                Species:
                <input type="text" />
              </label>
              <label>
                Origin:
                <input type="text" />
              </label>
              <label>
                Current location:
                <input type="text" />
              </label>
              <label>
                Character summary:
                <textarea
                  rows="5"
                  placeholder="Tell us something we don't know..."
                />
              </label>
            </>
          )}

          {type === 'episode' && (
            <>
              <label>
                Air date:
                <input type="date" required />
              </label>
              <label>
                Episode number:
                <input type="text" placeholder="S01E01" required />
              </label>
              <label>
                Characters:
                <input type="text" placeholder="Do me a favor and get the character id from their url" />
              </label>
            </>
          )}

        </form>

      </Styles.modal>
    </>
  );
};

export default Modal;