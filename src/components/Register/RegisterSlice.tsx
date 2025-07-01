import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthResponse {
    token: string;
}

interface LoginState {
    registered: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: LoginState = {
    registered: false,
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk<
    AuthResponse,
    { name: string; password: string, email: string, role: string },
    { rejectValue: string }
>('auth/register', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/register', formData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || 'Registeration failed');
    }
}
);

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.loading = false;
                state.registered = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            });
    },
});

export const { } = registerSlice.actions;
export default registerSlice.reducer;
