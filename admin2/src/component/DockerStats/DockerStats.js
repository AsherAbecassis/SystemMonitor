import "./DockerStats.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDockerStats } from "../../redux/reducers/DockerStatsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FaDocker ,FaNetworkWired } from "react-icons/fa";

function DockerStats() {
  const stats = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getDockerStats());
  }, []);
  const handleClick = (event, hostip) => {
    // dispatch(getIp());
    dispatch(getDockerStats());
    console.log(params.hostip);
    // navigate("/" + hostip);
  };
  return (
    <>
      <div className="">
        <div className="row p-2">
          <div className="col">
            <p className="text-ip "><FaNetworkWired/> {params.hostip}</p>
            <div
              className="card text-bg-primary mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="text1 card-header">
                {" "}
                <FaDocker /> Docker Stats
              </div>
              <div className="text1 card-body">
                <h5 className="card-title">{stats.data.length}</h5>
                <p className="card-text">container</p>
              </div>
            </div>
            <p></p>
          </div>
          <div className="col-10">
            <div class="panel panel-default">
              <Button variant="primary" onClick={handleClick}>
                <BsArrowRepeat />
              </Button>
              <div className="tableFixHead text2">
                <table className="table2 ">
                  <thead>
                    <tr>
                      <th className="col-xs-8">Name</th>
                      <th className="col-xs-8">status</th>
                      <th className="col-xs-2">containerID</th>
                      <th className="col-xs-2">image</th>

                      <th className="col-xs-2">running</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.data.map((row, index) => (
                      <tr>
                        <td className=" col-xs-8">{row.name}</td>
                        <td className="col-xs-8">{row.status}</td>
                        <td className="col-xs-8">{row.containerID}</td>
                        <td className="col-xs-8 ">{row.image}</td>

                        <td className="col-xs-8">{row.running}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DockerStats;
