import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login/login-slice';
import articleSlice from './articles/articles-slice';


const store = configureStore({
  reducer: { login: loginSlice.reducer,articles: articleSlice.reducer},
});

export default store;