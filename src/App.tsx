import React from "react";
import './styles/app.scss';
import { ObjectProvider } from "./context/Context";
import SearchBar from "./Components/SearchBar";
import List from "./Components/List";
import Form from "./Components/Form";

//App component will be within our ObjectProvider context which allows all components within to share its children avoiding "drilling props" and repetitions
const App: React.FC = () => {
  return (
    <ObjectProvider>
      <div className="App">
        <div className="box-container">
          <div className="search-box">
            <SearchBar />
          </div>
          <div className="list-box">
            <List />
          </div>
          <div className="form-box">
            <Form />
          </div>
        </div>
      </div>
    </ObjectProvider>
  );
}

export default App;