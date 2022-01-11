import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";

// The redux store is the data layer surrounding our application,
// all state (inside any reducers) can be accessed through our store.
// If we need to grab the user, after they login, to be used in another
// component, we can do that by accessing the store.

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
