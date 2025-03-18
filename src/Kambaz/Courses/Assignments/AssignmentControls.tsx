/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import FacultyUser from "../../Account/FacultyUser";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addAssignment } from "./reducer";

export default function AssignmentControls(dispatch: any) {
    const { cid } = useParams();
    const newID = uuidv4();
    
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
                        href={"/#/Kambaz/Courses/" + cid + "/Assignments/" + newID}
                        onClick={() => dispatch(addAssignment({ id: newID, course: cid }))}>
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
