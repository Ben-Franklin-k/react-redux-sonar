import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAsync } from "../redux/reducers/counterSlice";
import { fetchApi } from "../redux/reducers/fakeApi";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.fakeApi.data);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="FetchApi"
          onClick={() =>
            dispatch(fetchApi("https://jsonplaceholder.typicode.com/todos/1"))
          }
        >
          Increment
        </button>
        <span>{data?.title}</span>
        <button
          aria-label="Increment async value"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
