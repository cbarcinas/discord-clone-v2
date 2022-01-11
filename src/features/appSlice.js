import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  // a name, used in action types
  name: "app",
  // the initial state of the reducer
  initialState: {
    channelId: null,
    channelName: null,
  },
  // an object of 'case reducers'
  reducers: {
    // these functions are intended to handle a specific action type
    // these functions (login / logout) are equivalent to a case statement in a switch
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
});

// we are exporting login & logout so that they can
// be used anywhere in our application
export const { setChannelId } = appSlice.actions;

// exporting our reducer so they can be used in our application
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
