import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = {
    question_category: "", 
    question_difficulty: "", 
    question_type: "",
    amount_of_question: 10,
    score: 0
}

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        category_reducer: (state, action) => {
            state.value.question_category = action.payload
        },
        difficulty_reducer: (state, action) => {
            state.value.question_difficulty = action.payload
        },
        type_reducer: (state, action) => {
            state.value.question_type = action.payload
        },
        amount_reducer: (state, action) => {
            state.value.amount_of_question = action.payload
        },
        score_reducer: (state, action) => {
            state.value.score = action.payload
        }
        
    }
})

export const { category_reducer, difficulty_reducer, type_reducer, amount_reducer, score_reducer } = questionSlice.actions

export default questionSlice.reducer