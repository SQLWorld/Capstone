import React from "react";
import { Link } from "react-router-dom";

const Parents = () => (
  <div className="page page--parents">
    <h1>Parents & Caregivers</h1>
    <ul>
      <li><Link to="/schedule">Caregiver Testing Schedule</Link></li>
      <li><Link to="/contact">Parent Resource Guide</Link></li>
      <li><a href="https://www.montgomeryschoolsmd.org" target="_blank" rel="noopener noreferrer">Lunch Payment Portal</a></li>
      <li><Link to="/attendance-policy">Attendance Policy</Link></li>
      <li><Link to="/bus-routes">Bus Routes & Transportation</Link></li>
    </ul>
    <p>Stay connected! Sign up for school communications and see how you can get involved with our Parent-Teacher Association (PTA).</p>
  </div>
);

export default Parents;


