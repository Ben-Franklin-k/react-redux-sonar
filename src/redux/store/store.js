import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import FakeApiReducer from "../reducers/fakeApi";

export default configureStore({
  reducer: { counter: counterReducer, fakeApi: FakeApiReducer },
});
