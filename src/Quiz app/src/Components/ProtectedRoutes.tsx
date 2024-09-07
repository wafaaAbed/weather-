
import  {Navigate}  from "react-router-dom"
import { useAppSelector } from "../store/hooks";

export default function ProtectedRoutes({children}:{children: React.ReactNode}) {
  const {userName} = useAppSelector((state)=>state.QuizSlice);

  if(userName === ""){
    return <Navigate to={"/"} />
  }

  return (
    <div>
      {children}
    </div>
  )
}