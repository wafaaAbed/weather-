

export type TQuiz={
  type?: string,
  difficulty?: "easy" | "hard" | "medium",
  category?: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
}
