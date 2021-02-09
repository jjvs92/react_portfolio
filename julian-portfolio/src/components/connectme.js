import React from "react";
import "./assets/css/connectme.css";


const ConnectMe = props => {
    const connectMeList = [
            {
            onClickFunc: false,
            icon: props.emailIcon,
            alt: "email icon",
            classText: "emailIcon"
            },
            {
            onClickFunc: true,
            icon: props.gitIcon,
            alt: "git icon",
            link: props.gitLink,
            classText: "gitIcon",
            },
            {
            onClickFunc: true,
            link: props.linkedInLink,
            icon: props.linkedIn,
            alt: "linkedIn icon",
            classText: "linkedInIcon"
            }
        ];
    return (
        <div className="connectMe">
            <h4 className="connectTitle">connect with me</h4>
            <div>
                {
                    connectMeList.map(({icon, alt, classText, onClickFunc, link}) => {
                        if(onClickFunc){
                            return (
                                <img src={icon} alt={alt} onClick={() => props.openLink(link)} className={classText}/>
                            )
                        }else {
                            return (
                            <img src={icon} alt={alt} className={classText}/>
                            )
                        }
                    })
                }
            </div>
        </div>
        


 )}

export default ConnectMe;