import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const path = '/Kambaz/Courses/' + cid + '/'
    return (
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <ListGroup id="wd-courses-navigation" style={{width: 120}}
                  className="wd list-group fs-5 rounded-0">
                        {links.map((link) => (
                        <ListGroup.Item key={link} as={Link} to={path + link} className={`list-group-item border border-0 bg-white
                              ${pathname.includes(link) ? "active text-black" : "text-danger" }`}>
                        <br />
                        {link}
                        </ListGroup.Item>
                        ))}
            </ListGroup>
      </div>
      );
}
