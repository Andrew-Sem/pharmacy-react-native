import { fetchDosages, addDosage } from "./../actions/dosagesAction";
import { IDosage } from "./../../models/IDosage";
import { createSlice } from "@reduxjs/toolkit";

interface ProducersState {
  dosages: Array<IDosage>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProducersState = {
  dosages: [],
  loading: "idle",
};

const dosageSlice = createSlice({
  name: "producers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDosages.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchDosages.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.dosages = action.payload;
      })
      .addCase(fetchDosages.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.error);
      });

    builder
      .addCase(addDosage.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addDosage.fulfilled, (state, action) => {
        state.loading = "succeeded";
        console.log(action.payload);
      })
      .addCase(addDosage.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.error);
      });
  },
});

export default dosageSlice.reducer;
