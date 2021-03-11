import React from 'react';
import { Alert } from 'react-bootstrap';

const EditProfile = ({profile, toggleEditView, editFormInput, styles}) => {

  return (
    <>
      <Alert className={styles.editContainer}>
        <div onClick={toggleEditView} className={styles.closeBtn}>X</div>
        <Alert.Heading>
          <h1>Edit Profile</h1>
        </Alert.Heading>
        <hr/>
        <form action='/edit' method='Post'>
          <label htmlFor='name'>Name: </label>
          <input
            className={styles.editNameInput}
            value={profile.name}
            onChange={editFormInput}
            type='text' id='name' name='name' />
          <hr/>
          <label htmlFor='bio'>Bio: </label>
          <br/>
          <textarea
            className={styles.editBioTextArea}
            value={profile.bio}
            onChange={editFormInput}
            type='text' id='bio' name='bio' rows='10' cols='60'/>
          <hr/>
          <button className={styles.editSaveBtn} type='submit' onClick={toggleEditView}>
            Save Changes
          </button>
        </form>
      </Alert>
      <div className={styles.alertBackground} onClick={toggleEditView}></div>
    </>
  );
}

export default EditProfile;