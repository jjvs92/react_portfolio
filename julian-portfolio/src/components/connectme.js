import React from "react";
import "./assets/css/connectme.css";


const ConnectMe = props => (
    

        <div className="connectMe">
            <h4 className="connectTitle">connect with me</h4>
            <div>
            <img src={props.emailIcon} alt="email icon" className="emailIcon"/>
            <img src={props.gitIcon} alt="git icon" className="gitIcon"/>
            <img src={props.linkedIn} alt="git icon" className="linkedInIcon"/>
            </div>
        </div>
        


)

export default ConnectMe;