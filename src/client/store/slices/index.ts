import { combineReducers } from "redux";
import sectionsSlice from "./sectionsSlice.ts";

const appReducer = combineReducers({
    sections: sectionsSlice
});

export * from "./sectionsSlice.ts";
export default appReducer;