import { createSlice } from '@reduxjs/toolkit';
 
export const sectionSlice = createSlice({
    name: 'section',
    initialState: {
        currentSection: 'one'
    },
    reducers: {
        changeSection: (state, action) => {
            state.section = action.payload
        },
    },
});

export const { changeSection } = sectionSlice.actions;

export default sectionSlice.reducer;