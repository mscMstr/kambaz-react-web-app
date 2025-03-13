/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button, FormControl } from "react-bootstrap";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <FormControl defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <FormControl defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}

// import { Button, FormControl, FormGroup, FormSelect } from "react-bootstrap";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <FormGroup className="mb-3">
//           <FormControl defaultValue="alice" placeholder="username" className="wd-username my-2" />
//           <FormControl defaultValue="alice" placeholder="username" className="wd-username my-2"/>
//           <FormControl defaultValue="123"   placeholder="password" type="password"
//                 className="wd-password my-2" />
//           <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="my-2" />
//           <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="my-2" />
//           <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="my-2" />
//           <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="my-2" />
//           <FormSelect defaultValue="FACULTY" id="wd-role" className="my-2">
//             <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//             <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//           </FormSelect><br/>
//           <Button href={"/#/Kambaz/Account/Signin"} style={{ width: "100%" }} type="submit" variant="danger">Sign out</Button>
//       </FormGroup>
//     </div>
// );}
