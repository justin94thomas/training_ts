import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../components/BlogPosts/blogSlice';
import shoppingReducer from '../components/ShoppingCart/ShopSlice';


const store = configureStore({
    reducer: {
        blog: blogReducer,
        shopping: shoppingReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;