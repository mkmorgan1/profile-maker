import React from 'react';
import styles from './styles.module.css';
import { Container, Button, Alert } from 'react-bootstrap';

const EditProfile = ({profile, toggleEditView}) => {

  return (
    <>
      <Alert
        className={styles.editContainer}
        variant="primary"
        // disabled
        // onClose={toggleEditView}
      >
        <div
          onClick={toggleEditView}
          className={styles.closeBtn}
        >X</div>
        <Alert.Heading>
          <h1>Edit</h1>
        </Alert.Heading>
        <hr/>
        <form action="">
          <label htmlFor="name">Name: </label>
          <br/>
          <input type="text" id="name" name="name" value={profile.name}/>
          <hr/>
          <label htmlFor="email">Email: </label>
          <br/>
          <input type="text" id="email" name="email" value={profile.email}/>
          <hr/>
          <label htmlFor="bio">Bio: </label>
          <br/>
          <textarea type="text" id="bio" name="bio" rows="10" value={profile.bio}/>
        </form>
        <Button onClick={toggleEditView}>
          Save Changes
        </Button>
      </Alert>
    </>
  );
}

export default EditProfile;