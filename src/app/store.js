import { configureStore } from '@reduxjs/toolkit';

const placeholderReducer = (state = {}, action) => state;

export const store = configureStore({
  reducer: {
    'placeholder' : placeholderReducer,
  },
});
