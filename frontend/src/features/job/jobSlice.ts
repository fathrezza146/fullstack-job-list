import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobState {
  params: object
}

const initialState: JobState = {
  params: {}
};

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    searchJobs: (state, action: PayloadAction<any>) => {
      state.params = action.payload;
    },
    nextPage: (state, action: PayloadAction<any>) => {
      state.params = action.payload
    }
  }
})

export const { searchJobs } = jobSlice.actions;

export default jobSlice.reducer;