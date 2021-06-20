import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
   name: string;
   uid: string;
   logged?: boolean;
}

const initialState: User = {
   name: '',
   uid: '',
   logged: false,
};

export const authSlice = createSlice({
   name: 'auth',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      login: (state, action: PayloadAction<User>) => {
         state.name = action.payload.name;
         state.uid = action.payload.uid;
         state.logged = true;
      },
      logout: (state) => {
         state.name = '';
         state.uid = '';
         state.logged = false;
      },
   },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
