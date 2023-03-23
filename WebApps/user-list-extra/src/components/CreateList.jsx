import { RandomUsers } from "./RandomUsers";
import { format } from 'date-fns'
import Card from 'react-bootstrap/Card';

const CreateUserList = () => {

    const userList = JSON.parse(RandomUsers);
    // console.log(userList);
    const users = userList.results;
    // console.log(users);

    const hideEmail = (email) => {
        
        const replaceCharacter = "..."
        let hidden1 = "";
        let hidden2 = "";
        const splittedEmail = email.split('@');
        const leftSide = splittedEmail[0];

        for (var i = 0; i < leftSide.length; i++) {
            
            if(i < 3) {
                hidden1 += leftSide[i];
            } 
            if(i > 10) {
                hidden2 += leftSide[i];
            }
        }  
        return hidden1 + replaceCharacter + hidden2 + "@" + splittedEmail[1];
    }

    return (
        <div className="container d-flex" style={{margin: "2em auto", textAlign:"center", paddingBottom: "4em"}} >
            {users.map((item, i) => {
                return <Card style={{width: "30%", border: "1px solid gray", display: "inline-block", margin: "2em 1em", boxShadow: "5px 5px 5px 0px rgba(209,209,209,1)", textAlign: "left"}}>
                            <Card.Img variant="top" src={item.picture.large} style={{width: "100%"}}/>
                            <Card.Text style={{zIndex: "1", position:"relative", bottom: "3em", left: "1em", color: "white",fontSize: "2em"}}>{item.name.first}</Card.Text>
                            <Card.Body style={{marginLeft: "1.5em"}}>
                                <Card.Text>Email: {hideEmail(item.email)}</Card.Text>
                                <Card.Text>Date of Birth: {format(new Date(item.dob.date), 'MM-dd-yyyy')}</Card.Text>
                            </Card.Body>
                        
                        </Card>
                
            })}

            
        </div>
    )
}

export default CreateUserList;