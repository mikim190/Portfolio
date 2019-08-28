import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <main id="about">
          <h1 className="lg-heading">
            About <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading" />
          <div className="about-info">
            <div className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">Hi! My name is Kim Tran</h3>
              <p>I'm a software engineer based in San Francisco Bay Area. </p>
            </div>
            <div className="job job-1">
              <p>
                I'm highly passionate about writing code following good
                practices and top-notch technologies. I have been involved in
                many technological projects, in the field of business,
                government and startup, always working on both the back-end and
                the front-end. On the academic side I hold a Bachelor of
                Engineering in Environmental. I consider myself a person with
                hunger for knowledge and always looking for new ideas to improve
                what the market has to offer.
              </p>
            </div>
            <div className="job job-2">
              <p>
                I love to solve problems. Whether it’s finding the most elegant
                way to write a line of code or figuring out which technologies
                fit best into the project, I love the challenge of finding a way
                and discovering solutions.
              </p>
              <p>
                I primarily use React and JavaScript, but picking up new
                framework or language isn't a problem. I have programming
                experience and I'm comfortable developing on the frontend as
                well as backend.
              </p>
            </div>
            <div className="job job-3">
              <p>
                Here's a few technologies I've been working with:
                <li>JavaScript (ES6+)</li>
                <li>HTML & (S)CSS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL/PostgreSQL</li>
              </p>
            </div>
          </div>
        </main>
        <div className="main-footer footer">Copyright &copy; 2019</div>
      </div>
    );
  }
}

export default About;

// re-using existing solutions
{
  /* <p>
                If you're looking for someone people-driven, creative, and ready
                to learn, please don't hesitate to contact me at
                mykim.tran297@gmail.com{" "}
              </p> */
}
