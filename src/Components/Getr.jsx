import React from "react";
const Getr=(props)=>{
    return<>
    <div className="row text-center">
        <h1 className="mt-5 your">{props.your}</h1>
    </div>
    <div className="row text-center mt-2">
        <p className="craft">{props.craft}</p>
    </div>
    <div className="row mt-3">
        <a className="Get-started2 mx-auto" href="#">{props.getstarted}</a>
    </div>
    <div className="row mt-5 asseen">
        <div className="col-md-4">
            <span className="mx-auto craft">{props.asseen}</span>
        </div>
        <div className="col-md-4 mt-2">
            <img className="preneur" src={props.enterpreneur} alt="enterpreneu"/>
        </div>
        <div className="col-md-4 mt-2">
            <h6 className="craft">{props.businesssider}</h6>
        </div>

    </div>
    
    </>





}
export default Getr;