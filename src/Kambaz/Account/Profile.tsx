import { Button, FormControl, FormGroup, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormGroup className="mb-3">
          <FormControl defaultValue="alice" placeholder="username" className="wd-username my-2" />
          <FormControl defaultValue="alice" placeholder="username" className="wd-username my-2"/>
          <FormControl defaultValue="123"   placeholder="password" type="password"
                className="wd-password my-2" />
          <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="my-2" />
          <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="my-2" />
          <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="my-2" />
          <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="my-2" />
          <FormSelect defaultValue="FACULTY" id="wd-role" className="my-2">
            <option value="USER">User</option>       <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
          </FormSelect><br/>
          <Button href={"/#/Kambaz/Account/Signin"} style={{ width: "100%" }} type="submit" variant="danger">Sign out</Button>
      </FormGroup>
    </div>
);}
