import {  useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';




function FinishedQuiz({ showing,title,message }: {showing:boolean, title: string,message:string }) {
  const [show, setShow] = useState(showing);
  const navigate = useNavigate();
  

  return (
    <Modal show={show} onHide={() => {setShow(!show),navigate("/",{replace:true})}} backdrop="static"
      keyboard={false} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
      
        <Button variant="primary" onClick={()=>{setShow(!show),navigate("/",{replace:true})}}>
          Try Again
        </Button>
      </Modal.Footer>
    </Modal>
    
  )
}

export default FinishedQuiz
