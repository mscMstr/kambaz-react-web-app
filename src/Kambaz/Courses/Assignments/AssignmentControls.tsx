import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
export default function AssignmentControls() {
 return (
    <div className="text-nowrap ">
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <InputGroup id="wd-search-assignment" className="mb-3">
        <InputGroup.Text><IoIosSearch /></InputGroup.Text>
        <FormControl placeholder="Search for Assignments" />
     </InputGroup>
   </div>
);}
