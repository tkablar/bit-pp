import PropTypes from 'prop-types';
import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

export const AutoStory = ({ userName, title, score, time, comments, id}) => {

    const timer = new Date(time).getHours();

    return (   
    <div style={{borderBottom: "1px solid #ebebeb", padding: "0.8em"}}>
        <li id={id}>
            <h4>{title}</h4>
            <div style={{display: "inline-flex"}}>
            
                <p><BsFillHeartFill/> {score} <BsFillPersonFill/> {userName} <BsClock/> {timer} hours ago</p> 
                <p style={{width: "10em",backgroundColor
                : "#17a2b7", borderRadius: "3em", padding: "0em 0.5em", color: "white", textAlign: "center", marginLeft: "1em"}}>{comments} Comments</p>
            </div>
            
        </li> 
    </div>          
        
    )
}
