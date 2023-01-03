import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import FewProject from "./components/FewProjects";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Welcome/>
      <FewProject/>

    </React.Fragment>
  );
}

export default App;