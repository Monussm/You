import React from "react";
const Collegb=(props)=>{
    return<>
    <div className="col-md-6">
        <div className="row">
            <img src={props.essay} alt="College review"/>       
            </div>
    </div>
    <div className="col-md-6">
        <div className="row mt-4">
            <h3>{props.review}</h3>
        </div>
        <div className="row mt-4">
            <p>{props.increase}</p>
        </div>
        <div className="row mt-4">
        <a className="Get-started2 mx-auto" href="#">{props.getstarted}</a>
        </div>
        
    </div>
    
    
    
    
    
    </>





}
export default Collegb;