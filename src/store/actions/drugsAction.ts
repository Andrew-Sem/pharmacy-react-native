// import {AppDispatch} from "../store";
// import drugsSlice, {drugsFetching, drugsFetchingError, drugsFetchingSuccess} from "../reducers/drugsSlice";
// import {DrugsService} from "../../services/DrugsService";
// import axios from "axios";
//
//
// export const fetchDrugs = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(drugsFetching())
//         const res = await DrugsService.fetchDrugs()
//         console.log(res.data)
//         console.log("losos")
//         dispatch(drugsFetchingSuccess(res.data))
//     }
//     catch (e){
//         console.log("error")
//         if(axios.isAxiosError(e)){
//             dispatch(drugsFetchingError(e.message))
//         }
//         dispatch(drugsFetchingError("Unexpected error: " + e))
//     }
// }
