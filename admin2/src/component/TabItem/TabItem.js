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
              <div className="col-1 ">
                <Card.Img variant="top" src={img} />
              </div>
              <div className="col-3 text-white text-over">
                <div className="text-ip">
                  <h2>{obj.hostip}</h2>
                </div>
                <div>Host : {obj.hostname}</div>

                <div>{obj.uptime}</div>
                <div>{obj.procs}</div>
                <div>{obj.platform}</div>
                <div>{obj.platformFamily}</div>
                <div>{obj.kernelArch}</div>
                <div>{obj.os}</div>
              </div>
              <div className="col-sm-1 ">
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

                <p className="text-white">Memory</p>
              </div>
              <div className=" col-sm-1">
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
                <p className="text-white">Cpu</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TabItem;
