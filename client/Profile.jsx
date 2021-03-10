import React from 'react';
import styles from './styles.module.css';

const Bio = ({profile, toggleEditView}) => {

  return (
    <aside className={styles.bioContainer}>
      {/* BUTTONS */}
      <div className={styles.btns}>
        <span className={`${styles.inline}`}>
          <form action='/logout?_method=DELETE' method='POST' className={styles.logoutForm}>
            <button type='submit' className={`${styles.logoutBtn} ${styles.bioBtns}`}><i className='fas fa-sign-out-alt'></i></button>
          </form>
        </span>
        <span className={`${styles.editBtn} ${styles.bioBtns}`} onClick={toggleEditView}>
          <i className='far fa-edit'></i>
        </span>
      </div>
      {/* PROFILE */}
      <div className={styles.icon}><i className='far fa-grin-squint'></i></div>
      <div>{`name: ${profile.name}`}</div>
      <div>{`email: ${profile.email}`}</div>
      <div>{`bio: ${profile.bio}`}</div>

    </aside>
  );
}

export default Bio;