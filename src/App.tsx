import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import CustomHook from "./components/customhook/CustomHook";
import EvenMoreReact from "./components/EvenMoreReact";
import Text from "./components/component-generic/card-info/Text";
import ListExample from "./components/component-generic/list/ListExample.tsx";
import StringSelect from "./components/component-generic/select/StringSelect.tsx";
import NumberSelect from "./components/component-generic/select/NumberSelect.tsx";
import ObjectSelect from "./components/component-generic/select/ObjectSelect.tsx";


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
          <h1>CustomHook</h1>
          <CustomHook/>
          <h1>Even More React Component TS stuff</h1>
          <EvenMoreReact/>
          <h1>Component generic</h1>
          <h3>Card Info</h3>
          <Text/>
          <h3>List User</h3>
          <ListExample/>
          <h4>Select</h4>
          <StringSelect/>
          <NumberSelect/>
          <ObjectSelect/>
      </div>
    </>
  )
}

export default App
