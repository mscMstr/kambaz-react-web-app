import { Link } from "react-router";

export default function TOC() {
    return (
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Labs/Lab4">Lab 4</Link></li>
        <li><Link to="/Labs/Lab5">Lab 5</Link></li>
        <li><Link to="/Labs/Lab6">Lab 6</Link></li>
        <li><Link to="/Kambaz">Kambaz</Link></li>
        <li><Link id="wd-github" to="https://github.com/mscMstr/kambaz-react-web-app">Github</Link></li>
      </ul>
    );
  }
  