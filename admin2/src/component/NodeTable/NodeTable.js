import "./NodeTable.css";
import { getInfo } from "../../redux/reducers/HostInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function DarkExample() {
  const host = useSelector((state) => state.info);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = (event, hostip) => {
    // dispatch(getIp());
    dispatch(getInfo());
    console.log(hostip);
    navigate("/" + hostip);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10 col-md-offset-1">
          <div className="table-responsive">
            <p class="text-white">Hosts {host.data.length}</p>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Host Name</th>
                  <th>IP</th>
                  <th>OS</th>
                  <th>RAM</th>
                  <th>CPU</th>
                </tr>
              </thead>
              <tbody>
                {host.data.map((row, index) => (
                  <tr
                    onClick={(event) => handleClick(event, row.hostip)}
                    key={index}
                  >
                    <td>{row.hostname}</td>
                    <td>{row.hostip}</td>
                    <td>{row.os}</td>
                    <td>
                      <ProgressBar
                        now={row.mempercent}
                        label={`${row.mempercent}%`}
                      />
                    </td>
                    <td>{row.mempercent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkExample;
