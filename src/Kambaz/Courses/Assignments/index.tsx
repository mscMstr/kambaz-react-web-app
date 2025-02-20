/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Components/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />

      <ListGroup id="wd-modules" className="rounded-0">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> 
            ASSIGNMENTS 
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
              <ListGroup.Item className="wd-lesson list-group-item p-3 ps-1">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" /> 
                  <LuNotebookPen className="text-success me-2 fs-3" /> 
                  <div className="flex-grow-1">
                    <a href={"#/Kambaz/Courses/" + assignment.course + "/Assignments/" + assignment._id}
                      className="wd-assignment-link" >
                      {assignment.title}
                    </a>
                    <br/>
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.availableDate} |
                    <br/>
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </div>
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>);}


//       <ListGroup className="rounded-0" id="wd-modules">
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-assignments-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> 
//             ASSIGNMENTS 
//             <AssignmentControlButtons />
//           </div>
//           <ListGroup className="wd-assignment-list rounded-0">
//             <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <BsGripVertical className="me-2 fs-3" /> 
//                 <LuNotebookPen className="text-success me-2 fs-3" /> 
//                 <div className="flex-grow-1">
//                   <a href="#/Kambaz/Courses/1234/Assignments/123"
//                     className="wd-assignment-link" >
//                     A1
//                   </a>
//                   <br/>
//                   <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00AM |
//                   <br/>
//                   <b>Due</b> May 13 at 11:59PM | 100 pts
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <BsGripVertical className="me-2 fs-3" /> 
//                 <LuNotebookPen className="text-success me-2 fs-3" /> 
//                 <div className="flex-grow-1">
//                   <a href="#/Kambaz/Courses/1234/Assignments/123"
//                     className="wd-assignment-link">
//                     A2
//                   </a>
//                   <br />
//                   <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00AM |
//                   <br/>
//                   <b>Due</b> May 20 at 11:59PM | 100 pts
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <BsGripVertical className="me-2 fs-3" /> 
//                 <LuNotebookPen className="text-success me-2 fs-3" /> 
//                 <div className="flex-grow-1">
//                   <a href="#/Kambaz/Courses/1234/Assignments/123"
//                     className="wd-assignment-link">
//                     A3
//                   </a>
//                   <br/>
//                   <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00AM |
//                   <br/>
//                   <b>Due</b> May 27 at 11:59PM | 100 pts
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
// );}
