import { hideEmail } from "./hideEmail"
import { format } from 'date-fns'
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa"

export const CreateUserList = ({ image, name, lastName, email, dob, id, gender}) => {

        if(gender == "female") {
            return (
            <div className="female user-card show" key={id} style={{border: "1px solid #e0e0e0", display: "flex", height: "6em"}}>
                <img src={image} alt=""  style={{margin: "0.5em", borderRadius: "50%"}}/> 
                <div style={{display: "flex", textAlign: "left", flexDirection: "column" }}>
                    <h5  style={{marginBottom: "0.2em"}}>{name} {lastName}</h5>
                    <p style={{margin: "0em"}}><BsFillEnvelopeFill/> {hideEmail(email)}</p>
                    <p  style={{margin: "0em"}}> <FaBirthdayCake/> {format(new Date(dob), 'dd-MM-yyyy')}</p>
                </div>
            </div>)
        } else {
            return (
            <div className="user-card show" key={id} style={{border: "1px solid #e0e0e0", display: "flex", height: "6em"}}>
                <img src={image} alt=""  style={{margin: "0.5em", borderRadius: "50%"}}/> 
                <div style={{display: "flex", textAlign: "left", flexDirection: "column" }}>
                    <h5  style={{marginBottom: "0.2em"}}>{name} {lastName}</h5>
                    <p style={{margin: "0em"}}><BsFillEnvelopeFill/> {hideEmail(email)}</p>
                    <p  style={{margin: "0em"}}> <FaBirthdayCake/> {format(new Date(dob), 'dd-MM-yyyy')}</p>
                </div>
        </div>)
        }
        
    
}