import React, { memo, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ListGroupItem } from 'reactstrap';
import { CallbackContext } from '../../../contexts/PostContext';
import { asyncDelete } from '../../../redux/actions/postsActions';
// import { CallbackContext } from '../../contexts/PostContext';

function PostItem({ post, id }) {
  // const { deleteHandler } = useContext(CallbackContext);
  const dispatch = useDispatch();
  console.log(post);
  return (
    <ListGroupItem>
      <Button className="btn-danger" onClick={() => dispatch(asyncDelete(id))}>x</Button>
      {`${id}. ${post.message}`}
      {' '}
      <em>{post.User.name}</em>
    </ListGroupItem>
  );
}

export default memo(PostItem);
