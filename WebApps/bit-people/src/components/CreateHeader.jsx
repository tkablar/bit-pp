import { FaThList } from "react-icons/fa";
import { BsGrid3X2GapFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { BsArrowClockwise } from "react-icons/bs";
import { useEffect } from "react";
import { CreateAnimation } from "./CreateAnimation";
import { useState } from "react";

const CreateHeader = ({visible, setVisible}) => {
    
    const text = 'Bit People';
    const grid = <BsGrid3X2GapFill/>
    const list = <FaThList/>

    useEffect(() => {
    
    }, [visible])


        return (
            <div className="container-liquid" style={{backgroundColor: "#ec6f75", color: "white", height: "4em", padding: "1em 1em", paddingTop: "1.5em" }}>
                <h1 style={{fontSize: "1.5em", textAlign: "center", margin: "none",display: "inline"}}>{text}</h1>
                <ul style={{listStyleType: "none",margin: "0", padding: "0", textDecoration:"none", color: "white", float: "right"}}>
                    <li style ={{display: "inline", margin: "0em 1em"}}><a href="" style={{textDecoration:"none", color: "white"}}>About</a></li>
                    <li style ={{display: "inline", margin: "0em 1em"}}><Button onClick={() => {window.location.reload(false)}} style={{backgroundColor: "#ec6f75", color: "white", textDecoration:"none", border: "0px"}}><BsArrowClockwise/></Button></li>
                    <li style ={{display: "inline", margin: "0em 1em"}}><Button style={{backgroundColor: "#ec6f75", color: "white", textDecoration:"none", border: "0px"}} onClick={()=> { setVisible(!visible)}}>{visible ? list : grid}</Button></li>
                </ul>
            </div>
        );
}

export default CreateHeader