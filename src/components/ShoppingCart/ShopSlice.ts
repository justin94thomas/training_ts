import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}
interface ShoppingState {
    products: Product[],
    loading: boolean,
    error: string | null
}
const initialState: ShoppingState = {
    products: [],
    loading: false,
    error: null
}

// Fetch product data:
export const fetchProducts = createAsyncThunk('shopping/fetchProducts', async () =>{
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data as Product[]
})

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state =>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) =>{
            state.loading = false;
            state.products = action.payload
        }).addCase(fetchProducts.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch products';
        })
    }

})

export const { } = shoppingSlice.actions;
export default shoppingSlice.reducer;