import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  userId: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ userId: string; accessToken: string }>
    ) => {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
    },
    clearToken: (state) => {
      state.userId = null;
      state.accessToken = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;