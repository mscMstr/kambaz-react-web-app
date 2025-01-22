import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cactus.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2442/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/bridge.jpg" width={200} />
            <div>
              <h5> MATH2442 Geometry of Bridges </h5>
              <p className="wd-dashboard-course-title">
                Bridges are shapes that hold weight... </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5231/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/speed.jpg" width={200} />
            <div>
              <h5> PHYS5231 Physics in Light </h5>
              <p className="wd-dashboard-course-title">
                Is there physics to the actions of light? </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1143/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/stop.jpg" width={200} />
            <div>
              <h5> PSYCH1143 Evaluating Signs </h5>
              <p className="wd-dashboard-course-title">
                Why do our brains react to certain things the way they do?  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3214/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/night.jpg" width={200} />
            <div>
              <h5> ASTR3214 A Look Up Above </h5>
              <p className="wd-dashboard-course-title">
                Look at the stars, the sun, the moon and write about what that means for your life. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2563/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/room.jpg" width={200} />
            <div>
              <h5> ARCH2563 Structural Integrity </h5>
              <p className="wd-dashboard-course-title">
                What to avoid when building something you want to remain standing. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1111/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/flower.jpg" width={200} />
            <div>
              <h5> AGRI1111 Flowers </h5>
              <p className="wd-dashboard-course-title">
                Your one and only chance to learn to start a garden you won't (hopefully) kill!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
