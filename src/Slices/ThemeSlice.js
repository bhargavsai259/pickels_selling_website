import { createSlice } from "@reduxjs/toolkit";
const color='light';
const ThemeSlice=createSlice({
  name:'theme',
  initialState:color,
  reducers:{
    ChangeTheme:(state)=>state="dark"
  }
})

export default ThemeSlice.reducer;
export const {ChangeTheme}=ThemeSlice.actions;