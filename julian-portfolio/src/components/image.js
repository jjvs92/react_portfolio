import React from "react";
import "./assets/css/image.css";

const Image = props => 
        <div>
            <img src={props.ProfileImage} className="profileImage" alt="placeholder image" styles="height:250px"/>
        </div>        
    

export default Image;