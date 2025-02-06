import { Button, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormGroup>
        <FormControl placeholder="username" className="wd-username my-2" />
        <FormControl placeholder="password" type="password" className="wd-password my-2" />
        <FormControl placeholder="verify password" type="password" className="wd-password-verify my-2" />
        <Button href={"/#/Kambaz/Account/Profile"} className="my-2" style={{ width: "100%" }}>Sign up</Button>
      </FormGroup>
      <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}
