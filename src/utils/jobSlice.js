import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "./mockData";

const jobSlice = createSlice({
  name: "job",
  initialState: { currentJob: mockData[0] ,
    allJobs:[]
  },
  reducers: {
    setCurrentJob: (state, action) => {
      state.currentJob = action.payload
    },
    setAllJobs:(state,action)=>{
      state.allJobs=action.payload
    },
    
  },
});

export const { setCurrentJob ,setAllJobs} = jobSlice.actions;
export default jobSlice.reducer;
