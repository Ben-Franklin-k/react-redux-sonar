import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const FakeApi = createSlice({
  name: "fakeApi",
  initialState: {
    data: {},
  },
  reducers: {
    fetchs: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchs } = FakeApi.actions;
export const fetchApi = (url) => (dispatch) => {
  axios(url).then((response) => dispatch(fetchs(response.data)));
};

export default FakeApi.reducer;
