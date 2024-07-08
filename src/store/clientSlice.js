import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, apiEndpoints } from "./apiEndPoints";

export const getAllClientsFn = createAsyncThunk(
  "client/getAllClient",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await api.request(
        apiEndpoints.GET_ALL_CLIENTS,
        payload
      );
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createClientFn = createAsyncThunk(
  "client/createClient",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await api.request(
        apiEndpoints.CREATE_CLIENT,
        payload
      );
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  clientData: [],
  clientById: [],
};
const clientSlice = createSlice({
  name: "Clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClientsFn.fulfilled, (state, { payload }) => {
        state.clientData = payload.data;
        state.isLoading = false;
      })
      .addCase(getAllClientsFn.rejected, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.errorMessage = payload);
      })
      .addCase(getAllClientsFn.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(createClientFn.fulfilled, (state, { payload }) => {
        state.clientData.push( payload.data);
        state.isLoading = false;
      })
      .addCase(createClientFn.rejected, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.errorMessage = payload);
      })
      .addCase(createClientFn.pending, (state) => {
        state.isLoading = false;
      });
  },
});
// Export the reducer
export default clientSlice.reducer;

// Export selectors
export const selectIsLoading = (state) => state.clients.isLoading;
export const selectIsError = (state) => state.clients.isError;
export const selectErrorMessage = (state) => state.clients.errorMessage;
export const selectClientData = (state) => state.clients.clientData;
export const selectClientById = (state) => state.clients.clientById;
