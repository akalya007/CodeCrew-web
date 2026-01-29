import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
   removeUserFromFeed: (state, action) => {    //if interested or ignore , we want to remove the user from the feed.
      const newFeed = state.filter((user) => user._id !== action.payload);  //action.payload is the id which will be sending.--we will return the new fee , --by taking the existing feeed(state )
      return newFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;





