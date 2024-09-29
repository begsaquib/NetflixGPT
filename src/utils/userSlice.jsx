import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
      },
    reducers:{
        addUser: (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
          },
          removeUser: (state) => {
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
          },
        },

    }
)
export const {addUser, removeUser}= userSlice.actions;

export default userSlice.reducer;