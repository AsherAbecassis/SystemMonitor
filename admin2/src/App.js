import logo from "./logo.svg";
// import './App.css';
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:hostip" element={<Home />} />
    </Routes>
  );
}

export default App;
