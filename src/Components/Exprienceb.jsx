import React from "react";
const Exprienceb=(props)=>{
    return <>
    <div className="col-md-6 mt-5">
        <div className="row">
            <p>{props.hands}</p>
        </div>
        <div className="row">
            <h3>{props.with}</h3>
        </div>
        <div className="row build">
            <p>{props.many}</p>
        </div>
        <div className="row build">
            <p>{props.team}</p>
        </div>
    </div>
    <div className="col-md-6  mt-5">
        <div className="row border khan">
            <div className="col-md-4 mt-auto">
                <div className="row">  
                    <img className="goharkhan" src={props.Goharkhan} alt="Goharkhan"/>
                    <p className="text-center Gname">{props.Gname}</p>
                    <p className="text-center Gname">{props.title}</p>
                </div>
            </div>
        <div className="col-md-8 mt-5">
            <div className="row">
                <p>{props.grauted}</p>
            </div>
            <div className="row">
                <p>{props.belives}</p>
                <a href="#" className="text-dark">Learn more about our services<i className="fa-solid fa-arrow-right text-dark"></i></a>
            </div>
        </div>
        </div>
        <div className="row khan mt-3">
            <div className="col-md-4 mt-auto">
                <div className="row">  
                    <img className="goharkhan" src={props.maha} alt="Madakhan"/>
                    <p className="text-center Gname">{props.Mname}</p>
                    <p className="text-center Gname">{props.Mtitle}</p>
                </div>
            </div>
        <div className="col-md-8 mt-5">
            <div className="row">
                <p>{props.Mrauted}</p>
            </div>
            <div className="row">
                <p>{props.Mbelives}</p>
                <a href="#" className="text-dark">Learn more about our services<i className="fa-solid fa-arrow-right text-dark"></i></a>
            </div>
        </div>
    

        </div>
    </div>
    
    
    </>





}
export default Exprienceb;