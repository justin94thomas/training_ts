import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../components/BlogPosts/blogSlice';
import shoppingReducer from '../components/ShoppingCart/ShopSlice';
import authReducer from '../components/Login/LoginSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer,
        shopping: shoppingReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;