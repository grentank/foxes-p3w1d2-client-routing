import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col, Form, Input, Label, Row,
} from 'reactstrap';
import { UserContext } from '../../../contexts/UserContext';
import { submitLogin } from '../../../redux/actions/userActions';

export default function AuthPage() {
  // const { loginHandler } = useContext(UserContext);
  const dispatch = useDispatch();
  return (
    <Row>
      <Form onSubmit={(e) => dispatch(submitLogin(e))}>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Label
              className="visually-hidden"
              for="exampleEmail2"
            >
              Name
            </Label>
            <Input
              id="exampleEmail2"
              name="name"
              placeholder="Username"
              type="text"
            />
          </Col>
          <Col>
            <Label
              className="visually-hidden"
              for="examplePassword"
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="123"
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
    </Row>
  );
}
