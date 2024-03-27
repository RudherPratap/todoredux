import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './pages/reducers/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
