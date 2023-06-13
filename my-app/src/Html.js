import styles from './html.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const Html = () => {
  return (
    <>
      <div className={styles.container}>
        <h1> To-Do List</h1>
        <div className={styles.textbar}>
          <input type="text" placeholder="Add..." id="enter" />
          <button type="button">Submit</button>
        </div>
        <div className={styles.lista}>
          <div id="task">
            <input type="checkbox" />
            <p>
              Handla mjölk
              <FontAwesomeIcon icon={faPen} />
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
          <div id="task">
            <input type="checkbox" />
            <p>
              Hämta paket <FontAwesomeIcon icon={faPen} />
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
          <div id="task">
            <input type="checkbox" />
            <p>
              betala räkningar
              <FontAwesomeIcon icon={faPen} />{' '}
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Html;
