import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hook";
import { decrement, increment } from "../slices/counterSlice";

const Counter = () => {
  const count = useAppSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => dispatch(increment(count))}
        className="px-2 py-2 bg-slate-500 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement(count))}
        className="px-2 py-2 bg-slate-500 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
