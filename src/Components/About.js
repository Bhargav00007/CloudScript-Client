import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='main-div' style={{ backgroundColor: "#00cba9", width: "100%", margin: "0", padding: "0", height: "50vh", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>About Us</h1>
        <h3>Your platform to create and save Notes</h3>
        <div style={{ marginTop: "1rem" }}>
          <Link className="btn btn-dark" to="/home" role="button" style={{ display: "inline-block", marginRight: "10px", color: "white", width: "150px", borderRadius: "50px" }}>Home</Link>
        </div>
        <h5 className='container col-md-6 mt-5'>
          CloudScript is a simple yet powerful web application that allows you to create and securely store your notes online. Your privacy is our priority, so all notes are password-protected, ensuring that only you can access them.
        </h5>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,224L20,224C40,224,80,224,120,208C160,192,200,160,240,170.7C280,181,320,235,360,218.7C400,203,440,117,480,101.3C520,85,560,139,600,181.3C640,224,680,256,720,245.3C760,235,800,181,840,181.3C880,181,920,235,960,224C1000,213,1040,139,1080,117.3C1120,96,1160,128,1200,144C1240,160,1280,160,1320,138.7C1360,117,1400,75,1420,53.3L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,224L20,224C40,224,80,224,120,208C160,192,200,160,240,170.7C280,181,320,235,360,218.7C400,203,440,117,480,101.3C520,85,560,139,600,181.3C640,224,680,256,720,245.3C760,235,800,181,840,181.3C880,181,920,235,960,224C1000,213,1040,139,1080,117.3C1120,96,1160,128,1200,144C1240,160,1280,160,1320,138.7C1360,117,1400,75,1420,53.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
      <div className="card-body" style={{ backgroundColor: "#00cba9" }}>
        <h5 className="card-title text-center mx-5">Tech Used:</h5>
        <h5 className="card-title text-center">React <br />Node.js <br />MongoDB <br /></h5>

      

        <h5 className="card-title text-center mt-5">Keep your notes safe in the cloud</h5>
        <div className="text-center">
          <Link className="btn btn-dark" to="/" role="button" style={{ display: "inline-block", marginTop: "10px", color: "white", width: "150px", borderRadius: "50px" }}>Landing</Link>
        </div>

        <hr />
        <p className="card-text text-center">© 2024 <a href="/">CloudScript</a>. All rights reserved</p>
      </div>
    </>
  );
}

export default About;
