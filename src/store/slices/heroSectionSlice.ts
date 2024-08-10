import { createSlice } from "@reduxjs/toolkit";


export interface HeroSectionTypes {
  title: string;
  path: string
};

const initialState: HeroSectionTypes = {
  title: "",
  path: "/"
};

export const heroSectionSlice = createSlice({
  name: "heroSection",
  initialState: initialState,
  reducers: {
    setHeroSecAct: (state, action) => {
      return (state = {
        ...action.payload,
      });
    },
  },
  selectors: {
    getCurrentHeroSec: (hero) => hero,
  },
});

export const { setHeroSecAct } = heroSectionSlice.actions;
export const { getCurrentHeroSec } = heroSectionSlice.selectors;

export default heroSectionSlice.reducer;
