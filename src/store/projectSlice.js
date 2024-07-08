import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, apiEndpoints } from "./apiEndPoints";

export const getAllProjectFn = createAsyncThunk(
  "project/getAllProject",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await api.request(
        apiEndpoints.GET_ALL_PROJECTS,
        payload
      );
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createProjectFn = createAsyncThunk(
  "project/createProject",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await api.request(
        apiEndpoints.CREATE_PROJECTS,
        payload
      );
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateProjectFn = createAsyncThunk(
  "project/createProject",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await api.request(
        apiEndpoints.UPDATE_PROJECT,
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
  projectData: [],
  projectById: [],
};
const projectSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectFn.fulfilled, (state, { payload }) => {
        state.projectData = payload.data.totalProjects;
        state.isLoading = false;
      })
      .addCase(getAllProjectFn.rejected, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.errorMessage = payload);
      })
      .addCase(getAllProjectFn.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(createProjectFn.fulfilled, (state, { payload }) => {
        state.projectData = payload.data;
      });
  },
});
// Export the reducer
export default projectSlice.reducer;

// Export selectors
export const selectIsLoading = (state) => state.projects.isLoading;
export const selectIsError = (state) => state.projects.isError;
export const selectErrorMessage = (state) => state.projects.errorMessage;
export const selectProjectData = (state) => state.projects.projectData;
export const selectProjectById = (state) => state.projects.projectById;
