import logo from "./logo.svg";
import "./App.css";
import Bubbling from "./components/bubbling";
import BatchUpdation from "./components/BatchUpdation";
import Callback from "./components/useCallBack/Callback";
import Reducer from "./components/useReducer/Reducer";
import CounterProvider from "./components/Context/Provider";
import Context from "./components/Context/Context";
import ForwardRef from "./components/ForwardRef/ForwardRef";
import ImageLoading from "./components/ImageLoading";
import Keys from "./components/Keys";
import Portals from "./components/Portals";
function App() {
  return (
    <>
      {/* <Bubbling /> */}
      {/* <BatchUpdation /> */}
      {/* <Callback /> */}
      {/* <Reducer /> */}
      {/* <CounterProvider>
        <Context />
      </CounterProvider> */}
      {/* <ForwardRef /> */}
      {/* <ImageLoading /> */}
      {/* <Keys /> */}
      <Portals />
    </>
  );
}

export default App;
