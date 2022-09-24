import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ExampleToast = (props) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">{props.header}</strong>
        </Toast.Header>
        <Toast.Body>{props.body}</Toast.Body>
      </Toast>
    </>
  );
};

export default ExampleToast;
