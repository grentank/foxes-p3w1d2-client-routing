import React, { memo, useContext } from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { CallbackContext } from '../../../contexts/PostContext';
// import { CallbackContext } from '../../contexts/PostContext';

function PostItem({ post, id }) {
  const { deleteHandler } = useContext(CallbackContext);
  console.log(post);
  return (
    <ListGroupItem>
      <Button className="btn-danger" onClick={() => deleteHandler(id)}>x</Button>
      {`${id}. ${post.message}`}
      {' '}
      <em>{post.User.name}</em>
    </ListGroupItem>
  );
}

export default memo(PostItem);
