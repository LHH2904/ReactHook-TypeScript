import UseState from "./components/UseState.tsx";
import UseEffect from "./components/UseEffect.tsx";
import UseContext from "./components/UseContext.tsx";
import UseReducer from "./components/UseReducer.tsx";
import UseRef from "./components/UseRef.tsx";


function App() {


  return (
    <>
      <div>
          <h1>useState</h1>
          <UseState/>
          <h1>useEffect</h1>
          <UseEffect/>
          <h1>useContext</h1>
          <UseContext/>
          <h1>useReducer</h1>
          <UseReducer/>
          <h1>useRef</h1>
          <UseRef/>
      </div>
    </>
  )
}

export default App
