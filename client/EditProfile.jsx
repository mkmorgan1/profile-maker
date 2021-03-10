import React from 'react';
import styles from './styles.module.css';
import { Alert } from 'react-bootstrap';

const EditProfile = ({profile, toggleEditView, editFormInput}) => {

  return (
    <>
      <Alert
        className={styles.editContainer}
        variant='primary'
      >
        <div onClick={toggleEditView} className={styles.closeBtn}>
          X
        </div>
        <Alert.Heading>
          <h1>Edit Profile</h1>
        </Alert.Heading>
        <hr/>
        <form action='/edit' method='Post'>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' value={profile.name} onChange={editFormInput}/>
          {/* <hr/>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email' value={profile.email} onChange={editFormInput}/> */}
          <hr/>
          <label htmlFor='bio'>Bio: </label>
          <br/>
          <textarea type='text' id='bio' name='bio' rows='10' value={profile.bio} onChange={editFormInput}/>
          <hr/>
          <button type='submit' onClick={toggleEditView}>Save Changes</button>
        </form>
      </Alert>
      <div className={styles.alertBackground} onClick={toggleEditView}></div>
    </>
  );
}

export default EditProfile;