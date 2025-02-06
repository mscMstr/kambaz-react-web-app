import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect, Table } from "react-bootstrap";
// import { MdDateRange } from "react-icons/md";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <FormGroup className="mb-3" controlId="wd-assignments-editor">
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl id="wd-name" type="text" placeholder="A1" />

          <FormLabel htmlFor="wd-description">Example textarea</FormLabel>
          <FormControl id="wd-description" as="textarea" rows={3} 
            placeholder="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. he landing page should include he following: Your full name and section Links to each of the lab assignments, Link to the Kambaz application, Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."/>

          <br />
          <Table>
            <tr>
              <td align="right" valign="top">
                <FormLabel htmlFor="wd-points">Points</FormLabel>
              </td>
              <td>
                <FormControl id="wd-points" type="text" placeholder="100" />
              </td>
            </tr>
            <br/>
            <tr>
              <td align="right" valign="top">
                <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
              </td>
              <td>
                <FormSelect id="wd-group">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </FormSelect>
              </td>
            </tr>
            <br/>
            <tr>
              <td align="right" valign="top">
                <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
              </td>
              <td>
                <FormSelect id="wd-display-grade-as">
                  <option value="percentage">Percentage</option>
                </FormSelect>
              </td>
            </tr>
            <br/>
            <tr>
              <td align="right" valign="top">
                <FormLabel htmlFor="wd-submission-type ">Submission Type</FormLabel>
              </td>
              <td>
                <FormSelect id="wd-submission-type">
                  <option value="online">Online</option>
                </FormSelect>
                <br />
                <b>Online Entry Options</b>
                <br/>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry"/>
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL"/>
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings"/>
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation"/>
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads"/>
              </td>
            </tr>
            <br/>
            <tr>
              <td align="right" valign="top">
                <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
              </td>
              <td align="left" valign="top" className="border">
                <FormLabel htmlFor="wd-assign-to">Assign To</FormLabel>
                <FormControl id="wd-assign-to" value={"Everyone"} />

                <FormLabel htmlFor="wd-due-date">Due Date</FormLabel>
                <FormControl id="wd-due-date" type="date" value="2024-05-13" />
                {/* <InputGroup id="wd-due-date" className="mb-3">
                  <FormControl id="wd-due-date" type="date" value="2024-05-13" />
                  <InputGroup.Text>
                    <MdDateRange />
                  </InputGroup.Text>
                </InputGroup> */}

                <Table>
                  <tr>
                    <td>
                      <FormLabel htmlFor="wd-available-from">Available From</FormLabel>
                      <FormControl id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                    <td>
                      <FormLabel htmlFor="wd-available-until">Until</FormLabel>
                      <FormControl id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                  </tr>
                </Table>
              </td>
            </tr>
          </Table>

          <hr />
          <div style={{ textAlign : 'right' }}>
            <Button type="reset" variant="secondary" className="mx-1">Cancel</Button>
            <Button type="submit" variant="danger">Save</Button>
          </div>
        </FormGroup>
      </div>
  );}
  
  