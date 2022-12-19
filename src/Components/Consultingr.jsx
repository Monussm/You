import React from "react";
const Consultingr=(props)=>{
    return <>
    <div className="col-md-6 col-sm-6 mt-5">
        <div className="row">
            <img src={props.imgcollege} alt="College"/>
        </div>
    </div>
    <div className="col-md-6 col-sm-6  mt-5">
        <div className="row ">
            <p>{props.consluting}</p>
        </div>
        <div className="row">
            <h3>{props.college}</h3>
        </div>
        <div className="row build">
            <p>{props.admit}</p>
        </div>
        <div className="row build">
            <p>{props.Regardless}</p>
        </div>
    </div>
    </>





}
export default Consultingr;