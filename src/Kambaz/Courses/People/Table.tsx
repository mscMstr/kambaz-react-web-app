import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
      <tr>
        <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Tony</span>{" "}
        <span className="wd-last-name">Stark</span></td>
        <td className="wd-login-id">001234561S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">02:08:16</td>
      </tr>
      <tr>
        <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Natasha</span>{" "}
        <span className="wd-last-name">Romanoff</span></td>
        <td className="wd-login-id">006543218S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">11:51:27</td>
      </tr>
      <tr>
        <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Steve</span>{" "}
        <span className="wd-last-name">Rogers</span></td>
        <td className="wd-login-id">002351341S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">06:17:02</td>
      </tr>
      <tr>
        <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Peter</span>{" "}
        <span className="wd-last-name">Parker</span></td>
        <td className="wd-login-id">001242462S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">10:21:32</td>
      </tr>
    </tbody>
   </Table>
  </div> );}