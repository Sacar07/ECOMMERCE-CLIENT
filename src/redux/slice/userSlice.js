import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, //to simulate not logged in
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = null;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
