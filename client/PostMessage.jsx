import React from 'react';

const PostMessage = ({styles}) => {
  return (
    <div className={styles.postMessage}>
      <form action='/postMessage' method='POST'>
        <textarea
          className={styles.postInput}
          type='text' id='postMessage' name='postMessage'
          rows='3' cols='50' maxLength='100' required />
        <button
          className={styles.messagePostBtn} type='submit'>
          <i className={`fas fa-share ${styles.btn}`}></i>
        </button>
      </form>
    </div>
  );
}

export default PostMessage;