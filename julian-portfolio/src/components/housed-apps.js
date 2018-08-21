import React from "react";
import "./assets/css/houseapps.css";


const HouseApps = props => (
    
    <div className="container appContainer">

        <div className="houseApps">
            <h1 className = "projects">Projects</h1>
            {props.children}
        </div>
        
    </div>


)

export default HouseApps;