import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className='main-div' style={{backgroundColor:"#0099ff", width:"100%", margin:"0", padding: "0", height: "50vh", textAlign: "center"}}>
        <h1 style={{fontSize:"3rem"}}>CloudScript</h1>
        <h3>Your Notes, Secure in the Cloud</h3>
        <div style={{ marginTop: "1rem" }}>
          <Link className="btn btn-dark" to="/login" role="button" style={{ display: "inline-block", marginRight: "10px", color:"white", width:"150px" , borderRadius:"50px"}}>Login</Link>
          <Link className="btn btn-dark" to="/signup" role="button" style={{ display: "inline-block", color:"white", width:"150px", borderRadius:"50px" }}>Signup</Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L24,208C48,192,96,160,144,154.7C192,149,240,171,288,181.3C336,192,384,192,432,170.7C480,149,528,107,576,101.3C624,96,672,128,720,160C768,192,816,224,864,208C912,192,960,128,1008,106.7C1056,85,1104,107,1152,112C1200,117,1248,107,1296,96C1344,85,1392,75,1416,69.3L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L24,208C48,192,96,160,144,154.7C192,149,240,171,288,181.3C336,192,384,192,432,170.7C480,149,528,107,576,101.3C624,96,672,128,720,160C768,192,816,224,864,208C912,192,960,128,1008,106.7C1056,85,1104,107,1152,112C1200,117,1248,107,1296,96C1344,85,1392,75,1416,69.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      <div className="" style={{backgroundColor:"#0099ff"}}>
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">Keep your notes safe in the cloud</h5>
    <div className="text-center">
    <Link className="btn btn-dark" to="/about" role="button" style={{ display: "inline-block", marginTop: "10px", color:"white", width:"150px" , borderRadius:"50px"}}>About Us</Link>

 <u> <a
    href="https://github.com/Bhargav00007"
    style={{textDecoration:"none", display:"block", marginTop:"40px", color:"black"}}
    target="_blank"
    rel="noopener noreferrer"
  >
    Github
  </a>
  </u>
  <u>
  <a
    href="https://www.linkedin.com/in/bhrgv07/"
    style={{textDecoration:"none", display:"block",  color:"black"}}
    target="_blank"
    rel="noopener noreferrer"
  >
    Linkedin
  </a>
  </u>
</div>
 
    <hr/>
    <p className="card-text text-center">© 2024 <a>CloudScript</a>. All rights reserved
    </p>
  </div>
</div>
    </>
  );
}

export default Landing;
