import React from 'react';
import styles from './styles.module.css';
import { Container, Button, Alert, Modal} from 'react-bootstrap';

const EditProfile = ({profile, toggleEditView}) => {

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
          <h1>Edit</h1>
        </Alert.Heading>
        <hr/>
        <form action='/edit' method='Post'>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' value={profile.name} onChange={()=>{}}/>
          <hr/>
          <label htmlFor='email'>Email: </label>
          <input type='text' id='email' name='email' value={profile.email} onChange={()=>{}}/>
          <hr/>
          <label htmlFor='bio'>Bio: </label>
          <br/>
          <textarea type='text' id='bio' name='bio' rows='10' value={profile.bio} onChange={()=>{}}/>
        </form>
        <Button onClick={toggleEditView}>
          Save Changes
        </Button>
      </Alert>
    </>
  );
}

export default EditProfile;