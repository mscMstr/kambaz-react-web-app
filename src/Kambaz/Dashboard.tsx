import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/speed.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}
    
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/cactus.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
//                   <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//             <Link to="/Kambaz/Courses/2442/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/bridge.jpg" width="100%" height={160} />
//               <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">MATH2442 Geometry of Bridges</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">
//                   Bridges are shapes that hold weight...</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//             <Link to="/Kambaz/Courses/5231/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/speed.jpg" width="100%" height={160} />
//               <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">PHYS5231 Physics in Light</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">
//                   Is there physics to the actions of light?</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//             <Link to="/Kambaz/Courses/1143/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/stop.jpg" width="100%" height={160} />
//               <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">PSYCH1143 Evaluating Signs</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">
//                   Why do our brains react to certain things the way they do?</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//             <Link to="/Kambaz/Courses/3214/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/night.jpg" width="100%" height={160} />
//               <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">ASTR3214 A Look Up Above</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">
//                   Look at the stars, the sun, the moon and write about what that means for your life.</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//             <Link to="/Kambaz/Courses/2563/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/room.jpg" width="100%" height={160} />
//               <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">ARCH2563 Structural Integrity</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">
//                   What to avoid when building something you want to remain standing.</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1111/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/flower.jpg" width="100%" height={160} />
//                 <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">AGRI1111 Flowers</Card.Title>
//                 <Card.Text className="wd-dashboard-course-description">
//                     Your one and only chance to learn to start a garden you won't (hopefully) kill!</Card.Text>
//                 <Button variant="primary">Go</Button>
//                   </Card.Body>
//               </Link>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
// );}
