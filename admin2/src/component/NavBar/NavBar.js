import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Nav.css";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const host = useSelector((state) => state.info);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (stats.data != "undefined") {
      setShow(true);
    }
  }, [show]);
  const stats = useSelector((state) => state.stats);
  const handleClick = (event, hostip) => {
    // dispatch(getIp());
    dispatch(getInfo());
    console.log(hostip);
    navigate("/" + hostip);
  };

  return (
    <>
      <div class="container  text1 p-2">
        <div class="row">
          <div class="col-md-12">
            <ol class="tree-structure">
              <li>
                <span class="num">Admin</span>
                <Link to="/">Home</Link>
                <ol>
                  {host.data.map((row, index) => (
                    <li>
                      <span class="num">
                        {index + 1} {row.hostname}
                      </span>
                      <Link to={`/Node/${row.hostip}`}>{row.hostip}</Link>
                    </li>
                  ))}
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
