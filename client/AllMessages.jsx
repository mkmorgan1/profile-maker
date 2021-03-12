import React from 'react';

const IndividualMessage = ({post, styles}) => {
  return (
    <div className={styles.messageContainer}>
      <div>
        <div className={styles.messageName}>{post.name}</div>
        <div className={styles.messageDate}>{post.date}</div>
        <div className={styles.message}>{post.message}</div>
      </div>
    </div>
  );
}

const AllMessages = ({messages, styles}) => {
  const arrOfMessages = [];
  let index = messages.length - 1;
  while (index !== -1) {
    const post = messages[index]
    arrOfMessages.push(<IndividualMessage styles={styles} key={post.date} post={post}/>);
    index--;
  }
  return arrOfMessages;
}


export default AllMessages;