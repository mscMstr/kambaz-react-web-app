import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import FacultyUser from "../../Account/FacultyUser";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentControls() {
    const { cid } = useParams();
 return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="flex-grow-1">
        <InputGroup id="wd-search-assignment" className="mb-3">
            <InputGroup.Text><IoIosSearch /></InputGroup.Text>
            <FormControl placeholder="Search..." />
        </InputGroup>
        </div>
        <FacultyUser>
            <div className="mx-4">
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
                        href={"/#/Kambaz/Courses/" + cid + "/Assignments/" + uuidv4()}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
                <Button 
                    variant="secondary" size="lg" 
                    className="me-1 float-end" id="wd-add-assignment-group" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
            </div>
        </FacultyUser>
   </div>
);}
