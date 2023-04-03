import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabItem from "../TabItem/TabItem";
import DockerStats from "../DockerStats/DockerStats";

function TabInfo() {
  return (
    <Tabs
      defaultActiveKey="Info"
      id="uncontrolled-tab-example"
      className="mb-2"
    >
      <Tab eventKey="Info" title="Info">
        <TabItem />
      </Tab>
      <Tab eventKey="docker" title="docker">
        <DockerStats />
      </Tab>
      <Tab eventKey="Task" title="Task">
        <p>ss</p>
      </Tab>
    </Tabs>
  );
}

export default TabInfo;
