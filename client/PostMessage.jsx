import React from 'react';
import styles from './styles.module.css';

const PostMessage = (props) => {
  return (
    <div className={styles.postMessage}>
      <form action="/postMessage" method="POST">
        {/* <label htmlFor="postMessage"><i className="fas fa-bullhorn"></i></label> */}
        <textarea className={styles.postInput} type="text" id="postMessage" name='postMessage' rows="3" cols="50" maxLength='100' required />
        <button className={styles.messagePostBtn} type='submit'><i className={`fas fa-share ${styles.btn}`}></i></button>

      </form>
    </div>
  );
}

export default PostMessage;