import { map } from 'jquery';
import React from 'react';

const IndividualMessage = ({post}) => {
  return (
    <div>
      <div>{post.date}</div>
      <div>{post.name}</div>
      <div>{post.message}</div>
    </div>
  );
}

const AllMessages = ({messages}) => {
  return messages.map((post) => {
    return <IndividualMessage key={post.date} post={post}/>
  });
}


export default AllMessages;