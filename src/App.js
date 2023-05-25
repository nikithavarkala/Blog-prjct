import RouterComp from "./components/Routers/RouterComp";
import ContextState from "./components/context/ContentState";

function App() {
  return (
   <div>
      <ContextState>
        <RouterComp/>
      </ContextState>
   </div>
  );
}

export default App;
