import { configureStore } from "@reduxjs/toolkit";
import drugReducer from "./reducers/drugsSlice";
import producerReducer from "./reducers/producersSlice";
import dosageReducer from "./reducers/dosagesSlice";

export const store = configureStore({
  reducer: {
    drug: drugReducer,
    producer: producerReducer,
    dosage: dosageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
