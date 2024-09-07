import { Col, Row, Container } from "react-bootstrap"
import Countdown, { zeroPad } from 'react-countdown';
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";

import { memo } from "react";

type THeader = {
  name: string,
  isStart: boolean,

}
const Header = memo(({ name, isStart }: THeader) => {

  type TProps = {
    minutes: number,
    seconds: number,
    completed: boolean,
    isStart: boolean
  }
  const renderer = ({ minutes, seconds, completed }: TProps) => {
    if (completed) {
      // Render a completed state
    
          return <FinishedQuiz showing={true} title="Time Out" message={"unfortunately your time is finished, Plases tyr again!"} />
    
    } else if (isStart) {
      // Render a countdown
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
    }
  };

  return (
    <Container>
      <Row className="p-3 text-primary">
        <Col>
          <h1>Time:
            <span >  <Countdown
              date={Date.now() + 500000}
              renderer={renderer}
            /></span>

          </h1>
        </Col>
        <Col>
          <h1>Name: {name ? name : ""}</h1>

        </Col>
      </Row>
    </Container>
  )
})

export default Header;
