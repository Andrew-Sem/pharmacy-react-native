import { IDrug } from "../../models/IDrug";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDrugs, deleteDrugById } from "../actions/drugsAction";
import { DrugsService } from "./../../services/DrugsService";

interface DrugsState {
  drugs: Array<IDrug>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: DrugsState = {
  drugs: [],
  loading: "idle",
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.drugs = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchDrugs.rejected, (state) => {
        state.loading = "failed";
      });
    builder
      .addCase(deleteDrugById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteDrugById.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(deleteDrugById.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.error);
      });
  },
});

export default drugsSlice.reducer;
