import "./App.css";
import data from "./assets/data.json";

import Header from "./components/Header.jsx";
import Principal from "./components/Principal.jsx";

function App() {
  return (
    <>
      <Header />
      <Principal data={data} />
    </>
  );
}

export default App;
