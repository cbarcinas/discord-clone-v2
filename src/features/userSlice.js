import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // a name, used in action types
  name: "user",
  // the initial state of the reducer
  initialState: {
    user: null,
  },
  // an object of 'case reducers'
  reducers: {
    // these functions are intended to handle a specific action type
    // these functions (login / logout) are equivalent to a case statement in a switch
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; //to logout we just need to set the user to null
    },
  },
});

// we are exporting login & logout so that they can
// be used anywhere in our application
export const { login, logout } = userSlice.actions;

// we select state.user.user bc we are accessing our
// slice named 'user' then the state named 'user'
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
