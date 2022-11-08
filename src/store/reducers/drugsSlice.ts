import {IDrug} from "../../models/IDrug";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDrugs} from "../actions/drugsAction";


interface DrugsState {
    drugs: Array<IDrug>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: DrugsState = {
    drugs: [],
    loading: "idle"
}

const drugsSlice = createSlice({
    name: "drugs",
    initialState,
    reducers: {
        deleteDrugById: (state, action: PayloadAction<string>) => {
            state.drugs = state.drugs.filter((drug) => drug.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDrugs.pending, (state) => {
            state.loading = "pending"
        })
            .addCase(fetchDrugs.fulfilled, (state, action) => {
                state.drugs = action.payload
                state.loading = "succeeded"
            })
            .addCase(fetchDrugs.rejected, (state) => {
                state.loading = "failed"
            })
    }
})

export const {deleteDrugById} = drugsSlice.actions

export default drugsSlice.reducer


