import { hideEmail } from "./hideEmail"
import { format } from 'date-fns'
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import Card from 'react-bootstrap/Card';

export const CreateUserCard = ({ image, name, email, dob, id, gender}) => {

    if(gender == "female") {
        return (
            <Card className="female" key={id} style={{width: "30%", border: "1px solid gray", display: "inline-block", margin: "2em 1em", boxShadow: "5px 5px 5px 0px rgba(209,209,209,1)", textAlign: "left"}}>
                <Card.Img variant="top" src={image} style={{width: "100%"}}/>
                <Card.Text style={{zIndex: "1", position:"relative", bottom: "3em", left: "1em", color: "white",fontSize: "2em"}}>{name}</Card.Text>
                <Card.Body style={{marginLeft: "1.5em"}}>
                    <Card.Text>Email: {hideEmail(email)}</Card.Text>
                    <Card.Text>DoB: {format(new Date(dob), 'MM-dd-yyyy')}</Card.Text>
                </Card.Body>        
            </Card>
    )} else {
            return (
            <Card key={id} style={{width: "30%", border: "1px solid gray", display: "inline-block", margin: "2em 1em", boxShadow: "5px 5px 5px 0px rgba(209,209,209,1)", textAlign: "left"}}>
                <Card.Img variant="top" src={image} style={{width: "100%"}}/>
                <Card.Text style={{zIndex: "1", position:"relative", bottom: "3em", left: "1em", color: "white",fontSize: "2em"}}>{name}</Card.Text>
                <Card.Body style={{marginLeft: "1.5em"}}>
                    <Card.Text>Email: {hideEmail(email)}</Card.Text>
                    <Card.Text>DoB: {format(new Date(dob), 'MM-dd-yyyy')}</Card.Text>
                </Card.Body>            
            </Card>
        )}
    
}