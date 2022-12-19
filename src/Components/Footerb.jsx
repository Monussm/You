import React from "react";
const Footerb=(props)=>{
    return<>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
            <img className="Logo" src={props.footerlogo} alt="Footer"/>
        </div>
        <div className="row mt-3">
            <p>{props.help}</p>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
            <h5>{props.Service}</h5>
        </div>
        <div className="row">
            <ul>
                <a className="text-light" href="#"><li>{props.Review}</li></a>
                <a className="text-light" href="#"><li>{props.College}</li></a>
                <a className="text-light" href="#"><li>{props.Consultation}</li></a>
                <a className="text-light" href="#"><li>{props.Writing }</li></a>
            </ul>

        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
            <h5>{props.About}</h5>
        </div>
        <div className="row">
            <ul>
                <a className="text-light" href="#"><li>{props.Services}</li></a>
                <a className="text-light" href="#"><li>{props.Testimonials}</li></a>
                <a className="text-light" href="#"><li>{props.Team}</li></a>
                <a className="text-light" href="#"><li>{props.Abot}</li></a>
                <a className="text-light" href="#"><li>{props.Faq}</li></a>
                <a className="text-light" href="#"><li>{props.Join}</li></a>
            </ul>

        </div>
    </div>
    <div className="col-md-3 col-sm-6 mt-5">
        <div className="row">
            <h5>{props.college}</h5>
        </div>
        <div className="row">
            <p>{props.list}</p>
        </div>
        <div className="row">
            <input className="email" type="email" placeholder="Enter your Email"></input>
        </div>
        <div className="row mt-3">
        <a href="#" className="Get-started">SIGN UP</a>
        </div>
        <div className="row mt-3">
            <p>{props.terms}</p>
            <p><a href="#">{props.service}</a> and <a href="#">{props.policy}</a></p>
        </div>
    </div>
    <hr/>
    <div className="row">
        <p>{props.mit}</p>
    </div>
    <div className="row">
        <p>{props.llc}</p>
    </div>
    
    
    
    
    
    </>




}
export default Footerb;