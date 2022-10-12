import "./App.css";
import ResponsiveAppBar from "./navbar/navBar";
import GridLayout from "./util/gridlayout";
import MiniDrawer from "./navbar/sidebar";
import Router1 from "./routers/router";
import { useDispatch, useSelector } from "react-redux";
import LocalStorageService from "./util/localStorageService";
import { useEffect } from "react";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   return () => {
  //     window.onbeforeunload = function () {
  //       LocalStorageService.clearToken();
  //       return "";
  //     };
  //   };
  // }, []);

  return (
    <div className="App">
      <Router1 />

      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
    </div>
  );
}

export default App;
