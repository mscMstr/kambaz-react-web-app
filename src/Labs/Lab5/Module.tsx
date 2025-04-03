import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Module() {
    const [module, setModule] = useState({
        id: 1, name: "Capstone",
        description: "Probably the thing that will take up all your waking hours :)", 
        course: "IS4444"
      });
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Module [On Your Own]</h3>
      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${MODULE_API_URL}/name`}>
        Get Name
      </a><hr/>
      <h4>Modifying Properties</h4>
            <a id="wd-update-module-name"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/name/${module.name}`}>
              Update Name
            </a>
            <FormControl className="w-75" id="wd-module-name"
              defaultValue={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })}/>
            <hr />
    </div>
);}
