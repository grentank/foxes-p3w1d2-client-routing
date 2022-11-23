import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Col, ListGroup, Row } from 'reactstrap';
import { PostContext } from '../../../contexts/PostContext';
// import { PostContext } from '../../contexts/PostContext';
import PostItem from '../PostItem';

export default function PostList() {
  // const posts = useContext(PostContext);
  const posts = useSelector((store) => store.posts);
  return (
    <Row>
      <Col>
        <ListGroup>
          {posts?.map((el) => (
            <PostItem
              key={el.id}
              id={el.id}
              post={el}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
