import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {    //initiall the state will be null, when we update , it will go into the state.
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

/**
 * Style	Example	How It Works Internally	Does State Update?
Mutable (Immer handles it)	state.items.push(action.payload)	Immer detects your change and returns a new state object with the updated array	✅ Yes
Immutable (explicit return)	return action.payload	You directly return the new state value yourself	✅ Yes
 */