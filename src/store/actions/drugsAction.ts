import {createAsyncThunk} from "@reduxjs/toolkit";
import {DrugsService} from "../../services/DrugsService";

export const fetchDrugs = createAsyncThunk(
    '',
    async () => {
        const response = await DrugsService.fetchDrugs()
        return response.data
    }
)