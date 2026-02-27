import { createSlice, type PayloadAction, current } from "@reduxjs/toolkit";

interface PagesState {
  page1?: boolean;
  page2?: boolean;
  page3?: boolean;
  page4?: boolean;
  page5?: boolean;
  page6?: boolean;
  page7?: boolean;
}

const initialState: PagesState = {
  page1: true,
  page2: false,
  page3: false,
  page4: false,
  page5: false,
  page6: false,
  page7: false
}

const boardPagesSlice = createSlice({
  name: 'boardPages',
  initialState,
  reducers: {
    setBoardPagesState: (state, action: PayloadAction<keyof PagesState>) => {
      (Object.keys(state) as Array<keyof PagesState>).forEach((key) => {
        state[key] = false;
      });
      state[action.payload] = true;
    }
  }
});

export const { setBoardPagesState } = boardPagesSlice.actions;
export default boardPagesSlice.reducer;