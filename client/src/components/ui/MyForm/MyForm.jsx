import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col, Form, Input, Label, Row,
} from 'reactstrap';
import { CallbackContext } from '../../../contexts/PostContext';
import { submitPost } from '../../../redux/actions/postsActions';
// import { CallbackContext } from '../../contexts/PostContext';

export default function MyForm() {
  // const { submitHandler } = useContext(CallbackContext);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  return (
    <Form onSubmit={(e) => {
      // submitHandler(e, input);
      dispatch(submitPost(e, input));
      setInput('');
    }}
    >
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col>
          <Label
            className="visually-hidden"
            for="exampleEmail"
          >
            Post
          </Label>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="exampleEmail"
            name="message"
            placeholder="Make your post"
            type="text"
          />
        </Col>

        <Col>
          <Button type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
