import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import { decrCounter, incrCounter, setCounter } from '../../../redux/actions/counterActions';

export default function CounterPage() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <Col>
      <Row xs="12">
        <h1>
          Counter:
          {' '}
          {counter}
        </h1>
      </Row>
      <Row xs="3">
        <Button onClick={() => dispatch(incrCounter())} className="btn-success">+1</Button>
      </Row>
      <Row xs="3">
        <Button onClick={() => dispatch(decrCounter())} className="btn-info">-1</Button>
      </Row>
      <Row xs="3">
        <Button onClick={() => dispatch(setCounter(5))} className="btn-danger">=5</Button>
      </Row>
    </Col>
  );
}
