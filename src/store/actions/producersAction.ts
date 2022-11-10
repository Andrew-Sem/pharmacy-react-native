import { ProducersService } from "./../../services/ProducersService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProducer } from "../../models/IProducer";

export const addProducer = createAsyncThunk(
  "producers/addProducer",
  async ({ producerName, country }: IProducer) => {
    const response = await ProducersService.addProducer(producerName, country);
    return response.data;
  }
);

export const fetchProducers = createAsyncThunk(
  "producers/fetchProducers",
  async () => {
    const response = await ProducersService.fetchProducers();
    return response.data;
  }
);
