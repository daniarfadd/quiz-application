import { configureStore } from '@reduxjs/toolkit';
import questionSlice  from '../features/reducer';


export const store = configureStore({
  reducer: {
    question: questionSlice
  },
});

