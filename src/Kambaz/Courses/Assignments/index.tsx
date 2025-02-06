import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Components/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> 
            ASSIGNMENTS 
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="text-success me-2 fs-3" /> 
                <div className="flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link" >
                    A1
                  </a>
                  <br/>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00AM |
                  <br/>
                  <b>Due</b> May 13 at 11:59PM | 100 pts
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="text-success me-2 fs-3" /> 
                <div className="flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link">
                    A2
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00AM |
                  <br/>
                  <b>Due</b> May 20 at 11:59PM | 100 pts
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="text-success me-2 fs-3" /> 
                <div className="flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link">
                    A3
                  </a>
                  <br/>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00AM |
                  <br/>
                  <b>Due</b> May 27 at 11:59PM | 100 pts
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
);}
