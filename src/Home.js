import React from "react";
import { NavLink } from "react-router-dom";
import dance from "../src/images/dance.png";
import Chatbox from "./Chatbox";
import './Home.css';
import List from "./List";

const Home =()=>{
  return(
      <>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h6
      style={ {
        color: '#1b3bc9',
        }}
      >It's easy and free to see where you stand</h6> 
      <h1>Check your credit score</h1>
      <h6 className="my-3">
      Checking your credit history and credit scores can help you better understand your current credit position. Regularly checking your credit reports can help you be more aware of what lenders may see.
      </h6>
      <div className="mt-3">
      <NavLink className="btn-get-started" to="/Recomendation">Get Score</NavLink>
      <br></br>
      <br></br>
      <NavLink className="btn-get-started" to="/About">About</NavLink>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={dance} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      
      </div>
      </div>
      </div>
      </section>
      <div>
      <List/>
      </div>
<Chatbox />
<div className="container-fluid"
style={ {
backgroundColor: '#a7bfe0',
}}
>
<br></br>
<p>Email:- <a href='siddhantroy225@gmail.com'>siddhantroy225@gmail.com</a></p>
<p>Contact Number:-<a href="siddhantroy225@gmail.com">+ 91 83698 77891</a></p>
<br></br>
</div>
      </>
      );
};

export default Home;
