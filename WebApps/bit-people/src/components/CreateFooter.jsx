import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const CreateFooter = ({date}) => {
    const text = '© 2023 Copyright BIT';
    const date1 = 'few seconds ago';

    const currentDate = new Date();
    
    console.log(date);
    

    const currentSeconds = (currentDate - date) / 1000.0;
    console.log(currentSeconds);

    const getTime = () => {
        if(currentSeconds < 60) {
            return "a few seconds ago";
        }
        if(currentSeconds > 60 && currentSeconds < 300) {
            return "a few minutes ago";
        }
        else {
            const hours = (currentSeconds/120)
            return `${hours} hours ago`;
        }
    }
    
        return (
            <div className="container-liquid d-flex" style={{backgroundColor: "#ec6f75", color: "white", height: "2em", padding: "2em 2em", paddingTop: "1.5em", position: "fixed", left: "0", bottom: "0em", width: "100%"}}>
                <div className="container" style={{width: "80%", margin: "0em auto"}}>
                    <p style={{fontSize: "1em", textAlign: "left", margin: "none", width: "15em", marginRight: "0em", float: "left"}}>{text}</p>
                    <p style={{color:"white", fontSize: "1em", float: "right", position: "relative"}}>Last update: <span>{getTime()}</span></p>
                </div>
            </div>
        );
}

CreateFooter.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
}

export default CreateFooter