/* eslint-disable @typescript-eslint/no-explicit-any */
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "../Components/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import FacultyUser from "../../Account/FacultyUser";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls 
        setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}  /><br /><br /><br /><br />
      <ListGroup id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <ListGroup.Item className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <FacultyUser><BsGripVertical className="me-2 fs-3" /></FacultyUser>
              {module.name} 
              {!module.editing && module.name}
              { module.editing && (
                <FormControl className="w-50 d-inline-block"
                      onChange={(e) => 
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }  
                      }}
                      defaultValue={module.name}/>
              )}
              <FacultyUser>
                <ModuleControlButtons 
                  moduleId={module._id} 
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }} 
                  editModule={(moduleId) => dispatch(editModule(moduleId))}/>
              </FacultyUser>
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item className="wd-lesson list-group-item p-3 ps-1">
                    <FacultyUser><BsGripVertical className="me-2 fs-3" /></FacultyUser>
                    {lesson.name} 
                    <FacultyUser>
                      <LessonControlButtons />
                    </FacultyUser>
                  </ListGroup.Item>
                ))}</ListGroup>)}</ListGroup.Item>))}
        </ListGroup>
      </div>);}

//       <ListGroup className="rounded-0" id="wd-modules">
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
//             </ListGroup.Item>
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
//             </ListGroup.Item>
//             {/* <li className="wd-content-item">Learn what is Web Development</li>
//             </ul> */}
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
//             </ListGroup.Item>
//             {/* <ul className="wd-content">
//               <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//               <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
//             </ul> */}
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
//             </ListGroup.Item>
//             {/* <ul className="wd-content">
//               <li className="wd-content-item">Introduction to Web Development</li>
//               <li className="wd-content-item">Creating an HTTP Server with Node.js</li>
//               <li className="wd-content-item">Creating a React Application</li>
//             </ul> */}
//           </ListGroup>
//         </ListGroup.Item>
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
//             </ListGroup.Item>
//             {/* <ul className="wd-content">
//               <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//               <li className="wd-content-item">Deploy the assignment to Netlify</li>
//             </ul> */}
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
//             </ListGroup.Item>
//             {/* <ul className="wd-content">
//               <li className="wd-content-item">Introduction to HTML and the DOM</li>
//               <li className="wd-content-item">Formatting Web Content with Headings and Paragraphs</li>
//               <li className="wd-content-item">Formatting Content with Lists and Tables</li>
//             </ul> */}
//           </ListGroup>
//         </ListGroup.Item>
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
//           </div>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
// );}
