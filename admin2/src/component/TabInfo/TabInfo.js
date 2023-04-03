import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabItem from "../TabItem/TabItem";

function TabInfo() {
  return (
    <Tabs
      defaultActiveKey="Info"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Info" title="Info">
        <div
          className="card text-bg-primary mb-2"
          style={{ "max-width": "100rem" }}
        >
          <div className="card-header">Docker</div>
          <div className="card-body">
            <TabItem />
          </div>
        </div>
      </Tab>
      <Tab eventKey="PS" title="PS">
        <p>ss</p>
      </Tab>
      <Tab eventKey="Task" title="Task">
        <p>ss</p>
      </Tab>
    </Tabs>
  );
}

export default TabInfo;
