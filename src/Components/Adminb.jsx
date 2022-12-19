import React  from "react";
const Adminb=(props)=>{
    return <>
    
    <p className="text-center mt-5">{props.whyus}</p>
    <h3 className="text-center">{props.next}</h3>
    <div className="col-md-4 col-sm-12">
        <div className="row mt-5 medal">
        <i className="fa-solid fa-medal mt-2">Experience</i>
        <div className="row mt-4">
            <p className="mt-atuo">{props.Our}</p>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-sm-12">
        <div className="row mt-5 medal">
        <i className="fa-solid fa-bolt-lightning mt-2">Speed</i>
        <div className="row mt-4">
            <p>{props.choose}</p>
        </div>
        </div>
    </div>
    <div className="col-md-4 col-sm-12">
        <div className="row mt-5 medal">
        <i className="fa-solid fa-user mt-2">One-on-One</i>
        <div className="row mt-4">
            <p>{props.work}</p>
        </div>
        </div>
    </div>

    
    
    
    
    
    
    </>








}
export default Adminb;