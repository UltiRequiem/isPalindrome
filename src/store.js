import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "data",
  initialState: { results: [] },
  reducers: {
    setResult(state, action) {
      state.results = action.payload;
    },
  },
});

const reducer = combineReducers({
  data: slice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
