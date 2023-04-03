import React from "react";

import { getInfo } from "../redux/reducers/HostInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../component/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NodeTable from "../component/NodeTable/NodeTable";
import TabInfo from "../component/TabInfo/TabInfo";
import Card from "react-bootstrap/Card";
function Home() {
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //running the api call on first render/refresh
    dispatch(getInfo());
    //running the api call every one minute
    const interval = setInterval(() => {
      dispatch(getInfo());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container2">
        <div className="left">
          <NavBar />
        </div>
        <div className="up"></div>
        <div className="center-right container text1">
          <div class="row p-4">
            <div class="col">
              <div
                className="card text-bg-primary mb-3"
                style={{ "max-width": "10rem" }}
              >
                <div className="card-header">Docker</div>
                <div className="card-body">
                  <h5 className="card-title">5</h5>
                  <p className="card-text">Some</p>
                </div>
              </div>
            </div>
            <div class="col">
              {" "}
              <div
                className="card text-bg-primary mb-3"
                style={{ "max-width": "10rem" }}
              >
                <div className="card-header">Docker</div>
                <div className="card-body">
                  <h5 className="card-title">233</h5>
                  <p className="card-text">Some</p>
                </div>
              </div>
            </div>
            <div class="col">
              {" "}
              <div
                className="card text-bg-primary mb-3"
                style={{ "max-width": "10rem" }}
              >
                <div className="card-header">Docker</div>
                <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">Some</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          {info.isSuccess ? (
            <Container fluid>
              <Row>
                <div className="justify-content-center">
                  <NodeTable />
                </div>
              </Row>
            </Container>
          ) : (
            <p>empty</p>
          )}
        </div>
        <div className="down">
          <TabInfo />
        </div>
      </div>
    </>
  );
}

export default Home;
