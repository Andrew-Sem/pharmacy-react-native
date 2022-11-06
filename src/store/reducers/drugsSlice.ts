import {IDrug} from "../../models/IDrug";
import {createSlice} from "@reduxjs/toolkit";
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
    reducers: {},
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

export default drugsSlice.reducer


