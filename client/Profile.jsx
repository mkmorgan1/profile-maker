import React from 'react';

const Bio = ({profile, toggleEditView, styles}) => {

  return (
    <div className={styles.bioContainer}>
      {/* BUTTONS */}
      <div>
        <div className={styles.btns}>
          <span>
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
        <h2>About Me</h2>
        <div>{profile.bio}</div>
      </div>
    </div>
  );
}

export default Bio;