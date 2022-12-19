import React from "react";
const Brownr=(props)=>{
    return<>
    <h2 className="text-light offour  clients">{props.ofour}</h2>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
        <img className="firstpic" src={props.firstpic} alt="first">
        </img>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
        <img className="firstpic2" src={props.secondpic} alt="second">
        </img>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
        <img className="firstpic" src={props.thirdpic} alt="third"> 
        </img>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
            <img className="firstpic" src={props.fourpic} alt="Four"/>
        </div>
    </div>
    <div className="col-md mt-3">
        <div className="row">
            <img className="firstpic mx-auto" src={props.fifthpic} alt="Four"/>
        </div>
    </div>
    
    </>
}
export default Brownr