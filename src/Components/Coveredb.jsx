import React from "react";
const Coveredb=(props)=>{
    return <>
    <p className="text-center mt-5 text-dark fs-6">{props.got}</p>
    <h3 className="text-center ">{props.need}</h3>
    <div className="col-md-3 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-pencil  mt-5">College Essay Review</i>
        </div>
        <div className="row mt-4">
            <p>{props.help}</p>
        </div>
    </div>
    <div className="col-md-3 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-note-sticky  mt-5">College App Review</i>
        </div>
        <div className="row mt-4">
            <p>{props.look}</p>
        </div>
    </div>
    <div className="col-md-3 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-phone  mt-5">Consultation Call</i>
        </div>
        <div className="row mt-4">
            <p>{props.call}</p>
        </div>
    </div>
    <div className="col-md-3 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-feather mt-5">Writing Session</i>
        </div>
        <div className="row mt-4">
            <p >{props.session}</p>
            <a href="#" className="text-dark">Learn more about our services<i className="fa-solid fa-arrow-right text-dark"></i></a>
        </div>
    </div>
   
    
    
    
    
    
    </>




}
export default Coveredb;