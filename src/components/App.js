import logo from "../assets/logo.svg";
import "../styles/App.css";
import Piano from "./Piano";
import ScaleForm from "./ScaleForm";

function App() {
  return (
    <div className="App">
      <h1>Hello Wil</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Piano />
      <ScaleForm />
    </div>
  );
}

export default App;
