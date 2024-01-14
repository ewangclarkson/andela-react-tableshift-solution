import React from "react";
import './App.css';
import Andela from "./components/andela";
import Sorting from "./components/Sorting";

function App() {
  return (
    <div className="App">
       <Andela sdlc={["local development", "Testing Environment", "Development Environment", "Staging", "Production"]}/>
     {/*<Sorting/>*/}
    </div>
  );
}

export default App;
