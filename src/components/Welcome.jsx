import Projects from "./Projects";
import Resume from "./Resume";
import { Route, Routes } from "react-router";
import { Link } from "react-router";
import image from "../image/github2.png";
import image2 from "../image/myimg1.jpg";

function Welcome() {
  return (
    <>
      <div>Welcome Page</div>
      <div className="main-box">
        <div className="heading">
          <div>App Main Page</div>
          <div className="tab-container">
            <div className="tab">
              <Link to="/">Home</Link>
            </div>
            <div className="tab">
              <Link to="/Projects">View Projects</Link>
            </div>
            <div className="tab">
              <Link to="/resume">View Resume</Link>
            </div>
            <div className="tab">
              <a href="https://github.com/Olajimmy">
                <img className="img" src={image} /> GITHUB
              </a>
            </div>
          </div>
        </div>
        <div className="body">
          main page body
          <div className="pic">
            <h1 style={{ textAlign: "center" }}>WELCOME TO MY PORTFOLIO</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minus
              totam dolorem quod temporibus sint odio, aliquam obcaecati fugiat
              mollitia possimus. Voluptatibus pariatur consectetur rem et eaque
              recusandae aliquam neque.lore Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Enim voluptate ea unde molestias
              delectus, impedit ratione ex dolore dignissimos recusandae harum
              eum dolorem aliquam modi esse nemo expedita. Velit, consectetur.
            </h3>
            {/* <img src={image2} className="card-img" /> */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="img-size"
                    src={image2}
                    alt="Avatar"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="flip-card-back">Oladele Ogunjimi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">Footer</div>
      </div>
    </>
  );
}
export default Welcome;
