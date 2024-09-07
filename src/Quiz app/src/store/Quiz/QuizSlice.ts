import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TQuiz } from "../../types";
import actGetQuestions from "./act/actGetQuestions";

interface IQuizState {
  questions:TQuiz[]
  loading: TLoading;
  error: null | string;
  result:number,
  isStarted:boolean,
  userName:string,
}

const initialState: IQuizState = {
  questions:[],
  loading: "idle",
  error: null,
  result:0,
  isStarted:false,
  userName:"",
};
const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers:{
    resultOfQuiz:(state)=>{
     state.result=  state.result+1;
    },
    isStartedQuize:(state,action)=>{
     state.isStarted= action.payload;
    
    },
    setName:(state,action)=>{
      state.userName= action.payload as string;
    },
    resetAll:(state)=>{
      state.questions=[],
      state.loading= "idle",
      state.error= null,
      state.result=0,
      state.isStarted=false,
      state.userName=""
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(actGetQuestions.pending, (state) => {
      state.loading ="pending" ;
      state.error = null;
    });
    builder.addCase(actGetQuestions.fulfilled, (state, action) => {
      state.loading = "succeeded";
     state.questions = action.payload;
  
    });
    builder.addCase(actGetQuestions.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
       
        state.error = action.payload;
      }
    });
  },
});

export default QuizSlice.reducer;
export const{resultOfQuiz,isStartedQuize,setName,resetAll}= QuizSlice.actions;
export {actGetQuestions}