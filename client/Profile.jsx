import React from 'react';
import styles from './styles.module.css';
import { Container, Button, Alert } from 'react-bootstrap';

const Bio = ({profile, toggleEditView}) => {

  return (
    <div className={styles.bioContainer}>
      <div className={styles.editBtn} onClick={toggleEditView}>
        <i className="far fa-edit"></i>
      </div>
      <div className={styles.icon}><i className="far fa-grin-squint"></i></div>
      <div>{`name: ${profile.name}`}</div>
      <div>{`email: ${profile.email}`}</div>
      <div>{`bio: ${profile.bio}`}</div>

    </div>
  );
}

export default Bio;