import { addProducer, fetchProducers } from "./../actions/producersAction";
import { createSlice } from "@reduxjs/toolkit";
import { IProducer } from "../../models/IProducer";

interface ProducersState {
  producers: Array<IProducer>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProducersState = {
  producers: [],
  loading: "idle",
};

const producersSlice = createSlice({
  name: "producers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducers.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.producers = action.payload;
      })
      .addCase(fetchProducers.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.error);
      });

    builder
      .addCase(addProducer.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addProducer.fulfilled, (state, action) => {
        state.loading = "succeeded";
        console.log(action.payload);
      })
      .addCase(addProducer.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.error);
      });
  },
});

export default producersSlice.reducer;
