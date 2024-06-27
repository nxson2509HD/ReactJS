import MyHeader from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <MyHeader />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
