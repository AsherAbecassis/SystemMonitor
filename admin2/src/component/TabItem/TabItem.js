import * as React from "react";
import { getInfo } from "../../redux/reducers/HostInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import img from "../../assets/59944.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaDocker ,FaNetworkWired } from "react-icons/fa";
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "./TabItem.css";

function TabItem() {
  const host = useSelector((state) => state.info.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { hostip } = useParams();
  const found = host.filter((obj) => {
    return obj.hostip === hostip;
  });
  useEffect(() => {
    dispatch(getInfo());
    console.log("=======>", found);
  }, [hostip]);
  return (
    <>
      {found.map((obj, index) => {
        return (
          <div className="container-fluid ">
            <div className="row ">
              <div className="col-sm-1 ">
                <Card.Img variant="top" src={img} />
              </div>
              <div className="col-2 text-white text-over">
                <div className="text-ip">
                  <h2><FaNetworkWired/> {obj.hostip}</h2>
                </div>
                <div>Host : {obj.hostname}</div>

                <div>{obj.uptime}</div>
                <div>{obj.procs}</div>
                <div>{obj.platform}</div>
                <div>{obj.platformFamily}</div>
                <div>{obj.kernelArch}</div>
                <div>{obj.os}</div>
                <br />

                <div class="container">
                  <div className="row">
                    <div className="col  p-1">
                      <ProgressBar
                        now={obj.free / 1000000000}
                        label={"Disk"}
                        max={Math.floor(obj.total / 1000000000)}
                        animated={true}
                      />
                      total: {obj.total / 1000000000} {obj.fstype}{" "}
                      <h3>Free: { obj.free / 1000000000} </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1 ">
                <CircularProgressbarWithChildren
                  value={obj.mempercent}
                  text={`${22}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "white",
                    //   pathColor: "blue",
                  })}
                >
                  <RadialSeparators
                    count={12}
                    style={{
                      background: "#fff",
                      width: "2px",
                      // This needs to be equal to props.strokeWidth
                      height: `${10}%`,
                    }}
                  />
                </CircularProgressbarWithChildren>

                <p className="text-white">CPU</p>
              </div>
              <div className=" col-1">
                <CircularProgressbarWithChildren
                  value={obj.mempercent}
                  text={`${obj.mempercent}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "f88",
                    // pathColor: "#f88",
                  })}
                >
                  <RadialSeparators
                    count={12}
                    style={{
                      background: "#fff",
                      width: "2px",
                      // This needs to be equal to props.strokeWidth
                      height: `${10}%`,
                    }}
                  />
                </CircularProgressbarWithChildren>
                <p className="text-white">Memory</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TabItem;
