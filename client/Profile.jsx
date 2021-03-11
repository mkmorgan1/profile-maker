import React from 'react';
import styles from './styles.module.css';

const Bio = ({profile, toggleEditView}) => {

  return (
    <div className={styles.bioContainer}>
      {/* BUTTONS */}
      <div>
        <div className={styles.btns}>
          <span className={`${styles.inline}`}>
            <form action='/logout?_method=DELETE' method='POST' className={styles.logoutForm}>
              <button type='submit' className={`${styles.logoutBtn} ${styles.btn}`}><i className='fas fa-sign-out-alt'></i></button>
            </form>
          </span>
          <span className={`${styles.editBtn} ${styles.btn}`} onClick={toggleEditView}>
            <i className='far fa-edit'></i>
          </span>
        </div>
        {/* PROFILE */}
        <div><i className={`far fa-grin-squint ${styles.icon}`}></i></div>
        <hr/>
        <h2>{profile.name}</h2>
        <div>{profile.email}</div>
        <hr/>
        <div>About Me</div>
        <div>{profile.bio}</div>
      </div>
    </div>
  );
}

export default Bio;