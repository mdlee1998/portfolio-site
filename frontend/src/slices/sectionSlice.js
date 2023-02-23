import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: {
    currentSection: "intro",
  },
  reducers: {
    changeSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});

export const { changeSection } = sectionSlice.actions;
export const stateSection = (state) => state.section.currentSection
export default sectionSlice.reducer;

