/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { TQuiz } from '../types'

import { FormEvent, useEffect, useState } from 'react';
import FinishedQuiz from './FinishedQuiz/FinishedQuiz';
import { memo } from 'react';
type TQuestionProps = TQuiz & {
  nextQuestionHanlder: (arg1: string) => void,
  nextnumber: number,
  result:number,
  finishedQuiz:()=>void,

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Questions=memo(({ nextQuestionHanlder,finishedQuiz,result,nextnumber, question, correct_answer, incorrect_answers }: TQuestionProps) =>{

  const [answer, setAnswar] = useState("");
  const [allanswer, setAllAnswar] = useState<string[]>([])


  const nextQuestion = async (e:FormEvent) => {
    e.preventDefault()
  return  nextQuestionHanlder(answer);
    
  }
  const shuffle = () => {
    const allAnswars: string[] = { ...incorrect_answers };
    allAnswars[3] = correct_answer;
    const all = (Object.values(allAnswars)).sort(() => Math.random() - 0.5);
    setAllAnswar(all)

  }
  if(nextnumber === 9){
    finishedQuiz()
 return  <FinishedQuiz showing={true} title="Result" message={`Your result is ${result}/10 ${result > 5 ? "successful":"Failed"}` } />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    shuffle()
  
  }, [question])

  return (
    <div className="ms-4">
      <h3>Question {nextnumber + 1}</h3>
      <p className="px-3">{question} </p>
      <Form onSubmit={(e)=>e.preventDefault()} onChange={(e:FormEvent<HTMLFormElement>)=>setAnswar(e.target.value)}>
        {allanswer.length > 0 && allanswer.map((el, index) => (
    
          <div key={index} className="form-check px-5" >
            <input className="form-check-input" type="radio" name="exampleRadios" id={`exampleRadios${index}`} value={el} />
            <label className="form-check-label" htmlFor={`exampleRadios${index}`} style={{cursor:"pointer"}}>
              {el}
            </label>
          </div>
        ))}
        <Button type='submit' disabled={answer === "" ? true : false} onClick={nextQuestion} className="mx-5">
          {nextnumber === 9 ? "Finish Exam" : "Next Question"}
          </Button>
      </Form>
    </div>
  )
}
)
export default Questions
