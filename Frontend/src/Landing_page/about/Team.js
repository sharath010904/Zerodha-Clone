import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Meet the Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/sharath.jpeg"
            style={{ borderRadius: "10%", width: "50%" }}
          />
          <h4 className="mt-5">Shartath Mandapati</h4>
          <h6>B.Tech CSE Student at VIT</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          I'm a B.Tech CSE student at VIT who believes the best way to learn technology is to build something real.  
          </p>
          <p>
           This Zerodha-inspired trading platform started as a project and became an opportunity to understand how modern fintech products are designed — from clean interfaces and market dashboards to authentication and trading workflows.
          </p>
          <p>Every screen, component, and interaction has been built as part of my journey to become a better software engineer.</p>
          <p>Not a production trading platform. Just a student trying to build one.</p>
          <p>Playing basketball is my zen. Coding is how I turn ideas into reality.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="https://www.linkedin.com/in/sharathmandapati/">Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;