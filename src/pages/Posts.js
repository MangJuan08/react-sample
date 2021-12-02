import React from "react";
import FormPost from "../components/Form";
import { Col } from "reactstrap";

function Posts() {
  return (
    <div>
      <Col md="4"></Col>
      <Col md="4">
        <FormPost></FormPost>
      </Col>
    </div>
  );
}

export default Posts;
