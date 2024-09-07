import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "./Quiz/QuizSlice";
 const store = configureStore({
  reducer:{
    QuizSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;