import { addDrug } from "./../actions/drugsAction";
import { IDrug } from "../../models/IDrug";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDrugs,
  deleteDrugById,
  updateDrugById,
} from "../actions/drugsAction";

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
    // fetch all drugs
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
    // delete drug by id
    builder
      .addCase(deleteDrugById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteDrugById.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(deleteDrugById.rejected, (state) => {
        state.loading = "failed";
      });
    // update
    builder
      .addCase(updateDrugById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateDrugById.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(updateDrugById.rejected, (state, action) => {
        console.log(action.error);
        state.loading = "failed";
      });
    // add
    builder
      .addCase(addDrug.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addDrug.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(addDrug.rejected, (state, action) => {
        console.log(action.error);
        state.loading = "failed";
      });
  },
});

export default drugsSlice.reducer;
