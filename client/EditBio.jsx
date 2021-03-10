import React from 'react';
import styles from './styles.module.css';

const EditBio = ({profile}) => {

  return (
    <div className={styles.bioContainer}>
      <div className={styles.icon}><i className="far fa-grin-squint"></i></div>
      <div>{`name: ${profile.name}`}</div>
      <div>{`email: ${profile.email}`}</div>
      <div>{`bio: ${profile.bio}`}</div>
    </div>
  );
}

export default EditBio;