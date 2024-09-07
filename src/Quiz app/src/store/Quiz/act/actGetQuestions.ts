import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TQuiz } from "../../../types";

type TResponse= TQuiz[];

const actGetQuestions = createAsyncThunk(
  "quiz/actGetQuestions",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      try {
      const response = await axios.get<TResponse>("https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple");
      return response.data.results;

    } catch (error) {
      console.log("eeeeeytr"+error);
      return rejectWithValue(error);
    }
  }
);

export default actGetQuestions;
