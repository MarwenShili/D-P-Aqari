import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const initialState = {
  property: undefined,
  error: null,
  message: null,
  loading: "idle",
};

export const getProperty = createAsyncThunk(
  "api/properties",
  async ({ lang, body }) => {
    let data;
    try {
      const response = await axiosInstance.post(
        `/property_detail?lang=${lang}`,
        {
          ...body,
        }
      );
      data = await response.data;
      if (response.status === 200) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (err) {
      // const error = { message: err.payload.errors[0] };
      const error = err;
      return Promise.reject(error.message ? error.message : data?.message);
    }
  }
);

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: {
    [getProperty.pending]: (state) => {
      state.error = null;
      state.loading = "loading";
    },
    [getProperty.fulfilled]: (state, action) => {
      const { properties } = action.payload;
      if (properties) {
        state.property = properties[0];
      }
      state.loading = "idle";
    },
    [getProperty.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const {} = propertySlice.actions;

export default propertySlice.reducer;
