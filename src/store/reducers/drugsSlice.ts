import {IDrug} from "../../models/IDrug";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DrugsService} from "../../services/DrugsService";


interface DrugsState {
    drugs: Array<IDrug>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    // isLoading: boolean
    // error: string
}

const initialState: DrugsState = {
    drugs: [],
    loading: "idle"
    // isLoading: false,
    // error: ""
}

// First, create the thunk
export const fetchDrugs = createAsyncThunk(
    '',
    async () => {
        const response = await DrugsService.fetchDrugs()
        return response.data
    }
)

const drugsSlice = createSlice({
    name: "drugs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchDrugs.fulfilled, (state, action) => {
            console.log(action.payload);
            // Add user to the state array
            state.drugs = action.payload
        })
    }
})

export default drugsSlice.reducer


