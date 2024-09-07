import { Button, Form, Modal } from "react-bootstrap";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { isStartedQuize, resetAll, setName } from "../../store/Quiz/QuizSlice";
import { useNavigate } from "react-router-dom";

const { rootContainer, rootContent } = style;
function Root() {
  const dispatch = useAppDispatch();
const navigate= useNavigate();
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [errorMessage, seterrorMessage] = useState(false);
  const inputHander = (e) => {
        e.preventDefault();
    if (userName === "") {
      seterrorMessage(true)
    } else {
      dispatch(setName(userName));
      dispatch(isStartedQuize(true))
      seterrorMessage(false)
      setShow(!show);
      navigate("/home")
    }
  }
  useEffect(()=>{
    dispatch(resetAll());
  },[dispatch])
  return (
    <><Modal show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Your Name!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={inputHander}>
          <Form.Group className="mb-3" >
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Your Name"
              isInvalid={errorMessage}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your Name
            </Form.Control.Feedback>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(!show)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save 
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal><main className={rootContainer}>

        <div className={rootContent}>
          <h2>Welcome to Quiz, Are You Ready To Start?</h2>
          <p>This quiz contain 10 questions, try to solve them before 5:00 minutes!</p>
          <Button variant="warning" onClick={() => setShow(!show)}>Start Quiz</Button>
        </div>
      </main></>
  )
}

export default Root
