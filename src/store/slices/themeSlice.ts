import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  colorMode: string;
  sideBar: true | false;
} = {
  colorMode: "light",
  sideBar: true,

};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setThemeAct: (state, action) => {
      return (state = {
        ...state,
        colorMode: action.payload,
      });
    },
    setSideBarAct: (state, action) => {
      return (state = {
        ...state,
        sideBar: action.payload,
      });
    },
  },
  selectors: {
    getTheme: (theme) => theme,
  },
});

export const { setThemeAct, setSideBarAct } = themeSlice.actions;
export const { getTheme } = themeSlice.selectors;

export default themeSlice.reducer;
