import { combineReducers } from "redux";
import sectionsSlice from "./sectionsSlice.ts";
import boardPagesSlice from "./boardPagesSlice.ts";

const appReducer = combineReducers({
    sections: sectionsSlice,
    boardPages: boardPagesSlice
});

export * from "./sectionsSlice.ts";
export * from "./boardPagesSlice.ts";
export default appReducer;