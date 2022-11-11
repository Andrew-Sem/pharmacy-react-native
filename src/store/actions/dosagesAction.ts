import { DosageService } from "./../../services/DosageService";
import { IDosage } from "./../../models/IDosage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addDosage = createAsyncThunk(
  "dosages/addDosage",
  async ({ dosageFormName }: IDosage) => {
    const response = await DosageService.addDosage(dosageFormName);
    return response.data;
  }
);

export const fetchDosages = createAsyncThunk(
  "dosages/fetchDosages",
  async () => {
    const response = await DosageService.fetchDosages();
    return response.data;
  }
);
