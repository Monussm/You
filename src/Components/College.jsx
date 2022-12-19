import React from "react";
import Award from "./Award";
import Collegb from "./Collegb";
const College=()=>{
    return<>
    <div className="container-expand-lg">
        <div className="container">
            <div className="row">
            <Collegb essay="../Image/essay.svg"
            review="College Essay Review"
            increase="Increase your chances of acceptance with a standout college application essay. Receive comprehensive edits and feedback from top-rated Ivy League consultants in as little as 24 hours. 100% satisfaction guarantee."
            getstarted="EDIT MY ESSAY"/>
            <Award />

            </div>

        </div>

    </div>
    
    
    </>







}
export default College;