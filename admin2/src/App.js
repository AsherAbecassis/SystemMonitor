import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Node from "./pages/Node";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <>
      <div className="container2 text1 ">
        <div className="center-up">
       
        </div>
      
        <div className="center">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Node/:hostip" element={<Node />} />
          </Routes>
        </div>
        <div className="left">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default App;
