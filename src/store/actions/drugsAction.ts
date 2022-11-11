import { IDrug } from "./../../models/IDrug";
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

export const updateDrugById = createAsyncThunk(
  "drugs/updateById",
  async ({
    id,
    drugName,
    composition,
    dosageFormName,
    producerName,
    price,
  }: IDrug) => {
    const response = await DrugsService.updateDrugById({
      id,
      drugName,
      composition,
      dosageFormName,
      producerName,
      price,
    });
    return response.data;
  }
);

export const addDrug = createAsyncThunk(
  "drugs/addDrug",
  async ({
    drugName,
    composition,
    dosageFormName,
    producerName,
    price,
  }: IDrug) => {
    const response = await DrugsService.addDrug({
      drugName,
      composition,
      dosageFormName,
      producerName,
      price,
    });
    return response.data;
  }
);
