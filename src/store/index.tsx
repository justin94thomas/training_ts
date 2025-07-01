import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../components/BlogPosts/blogSlice';
import shoppingReducer from '../components/ShoppingCart/ShopSlice';
import authReducer from '../components/Login/LoginSlice';
import registerReducer from '../components/Register/RegisterSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        blog: blogReducer,
        shopping: shoppingReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;