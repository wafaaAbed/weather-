
import { useEffect, useState } from "react";
import style from "./style.module.css";
const { quizSection, container } = style;
import { actGetQuestions, resultOfQuiz } from "../store/Quiz/QuizSlice";
import Header from "../Components/Header/Header";
import Questions from "../Components/Questions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Lottie from "lottie-react";
import Loading from "../assets/lotiieLoading.json"
function Home() {
  
  const dispatch = useAppDispatch();
  const { questions, userName,result,loading} = useAppSelector((state) => state.QuizSlice);
  const [nextnumber, setNextNumber] = useState(0);
 const[isStart,setIsStart]=useState(true);

  const finishedQuiz =()=>{
    setIsStart(false);
  }  


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(actGetQuestions())
  }, [dispatch])


  const nextQuestionHanlder = async (getanswar: string) => {
    if (getanswar === questions[nextnumber].correct_answer) {
      dispatch(resultOfQuiz())
    } else {
      setNextNumber(prev => prev + 1)
      return;
    }

    setNextNumber(prev => prev + 1)
  }
  return (
    <div className={container}>
      <Header name={userName} isStart={isStart}  />
      <div className={quizSection}>
        {loading === "pending" ? <Lottie animationData={Loading}/> :(
      <Questions key={nextnumber}  finishedQuiz={finishedQuiz}  {...questions[nextnumber]} nextQuestionHanlder={nextQuestionHanlder} result={result} nextnumber={nextnumber} />
    )}
      </div>
    </div>

  )
}
export default Home;

