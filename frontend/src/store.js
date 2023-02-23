import {configureStore} from '@reduxjs/toolkit';
import sectionReducer from "./slices/sectionSlice.js";

const reducer = {sectionReducer}

export default configureStore({
    reducer: {
        section: sectionReducer,
    },
});