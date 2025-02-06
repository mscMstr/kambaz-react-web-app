import { Button, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <FormGroup>
        <FormControl placeholder="username" className="wd-username my-2" />
        <FormControl placeholder="password" type="password" className="wd-password my-2" />
        <Button id="wd-signin-btn" className="my-2" style={{ width: "100%" }} variant="primary" type="submit" href={"/#/Kambaz/Dashboard/"}>
          Sign in
        </Button>
      </FormGroup>
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">
        Sign up
      </Link>
    </div>
);}
