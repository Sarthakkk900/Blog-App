import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../store/authSlice.js"

export const store = configureStore({
   reducer:authReducer
})


