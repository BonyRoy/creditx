import React from "react";
import { NavLink } from "react-router-dom";


const Card =(props)=>{
    return(
        <>
    <div className='col-md-3 col-10 mx-auto'>
    <div className="card" style={{width:'18rem'}}>
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
    <div className="card-body">
    <h5 className="card-title font-weight-bold mx">{props.title}</h5>
    <NavLink to={props.Link} className="btn btn-outline-info">View</NavLink>
    </div>
    </div> 
    </div>
        </>
        );
};

export default Card;