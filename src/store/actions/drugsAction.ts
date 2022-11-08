import { createAsyncThunk } from "@reduxjs/toolkit";
import { DrugsService } from "../../services/DrugsService";

export const fetchDrugs = createAsyncThunk("drugs/fetchCatalogue", async () => {
  const response = await DrugsService.fetchDrugs();
  return response.data;
});

export const deleteDrugById = createAsyncThunk(
  "drugs/deleteById",
  async (id: string) => {
    const response = await DrugsService.deleteDrugById(id);
    return response.data;
  }
);
