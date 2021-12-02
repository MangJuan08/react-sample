import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function FormPost() {
  const [client, setClient] = useState({ firstName: "", lastName: "" });
  const [count, setCounter] = useState(0);
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input value={client.firstName} onChange={e => setClient({firstName:e.target.value})}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input value={client.lastName} onChange={e => setClient({lastName:e.target.value})}/>
        </FormGroup>
      </Form>

      <p>{client.firstName}</p>
      <button onClick={()=>setCounter(count+1)}>click</button>
      <p>{count}</p>
    </div>
  );
}

export default FormPost;
