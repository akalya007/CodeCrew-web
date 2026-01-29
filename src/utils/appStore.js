import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./conectionSlice";
import requestReducer from "./requestSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
      feed: feedReducer,
      connections: connectionReducer,
       requests: requestReducer,
  },
});

export default appStore;

//at once you create the store , we should provide the store to the App.

// --configurestore==>provide the store ==> create slice ==> add the reducer to store.
// --note--then we add the data in the redux store ===>we basically we dispatch the action.
//  for that we use, usedispatch() hook---is will return the object , it wil return the payload ob , send to 2nd srgu--action , then we update the data in the state.


/**
 * To see the data in the store , we use extension called , reactDev tools.
 */

//To modify the Slice in the store,it get Access to the State(initial state in the empty array.) and it also get access to the action.


