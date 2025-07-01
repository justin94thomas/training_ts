import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthResponse {
    token: string;
}

interface LoginState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: LoginState = {
    isAuthenticated: false,
    loading: false,
    error: null,
    token: null,
};

export const loginUser = createAsyncThunk<
    AuthResponse,
    { email: string; password: string },
    { rejectValue: string }
>('auth/login', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', formData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
}
);

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('authToken');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload.token || 'token string';
                localStorage.setItem('authToken', action.payload.token || 'token string');
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
