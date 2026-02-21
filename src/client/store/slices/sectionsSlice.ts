import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SectionsState {
  board: boolean;
  diary: boolean;
  blankSection: boolean;
  search: boolean;
}

const initialState: SectionsState = {
  board: true,
  diary: false,
  blankSection: false,
  search: false
}

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSectionsState: (state, action: PayloadAction<Partial<PagesState>>) => {
      state.board = action.payload.board ?? state.board;
      state.diary = action.payload.diary ?? state.diary;
      state.blankSection = action.payload.blankSection ?? state.blankSection;
      state.search = action.payload.search ?? state.search;
    }
  }
});

export const { setSectionsState } = sectionsSlice.actions;
export default sectionsSlice.reducer;