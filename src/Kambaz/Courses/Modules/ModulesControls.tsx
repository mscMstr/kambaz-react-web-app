import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Components/GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { MdNotInterested } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
import FacultyUser from "../../Account/FacultyUser";

export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 return (
   <div id="wd-modules-controls" className="text-nowrap">
    <FacultyUser>
      <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
              <MdNotInterested /> Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
              <MdNotInterested /> Unpublish all modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
        View Progress
      </Button>
    </FacultyUser>
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-collapse-all">
       Collapse All
     </Button>
     <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
   </div>
);}
