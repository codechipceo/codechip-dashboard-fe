import { configureStore } from "@reduxjs/toolkit";
import { slices } from "./indexSlice";
const { clientSlice , projectSlice} = slices;

const rootReducer = {
  clients: clientSlice,
  projects: projectSlice
};

export const store = configureStore({ reducer: rootReducer });
