import { RandomUsers } from "./RandomUsers";
import { format } from 'date-fns'

const CreateUserList = () => {

    const userList = JSON.parse(RandomUsers);
    console.log(userList)
    const users = userList.results;
    console.log(users);

    return (
        <div className="container" style={{paddingBottom: "10em"}}>
            {users.map((item, i) => {
                return <div key={i} className="user" style={{backgroundColor: "#efefef", color: "black", height: "3em", width: "80%", border: "none", margin: "2em auto", padding: "1em", paddingBottom: " 1em", display: "flex"}}>
                    <img style={{borderRadius: "3em"}} src={item.picture.medium} alt="" />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{margin: "0px", marginLeft: "1em"}}>Name: {item.name.first}</p>
                        <p style={{margin: "0px", marginLeft: "1em"}}>Email: {item.email}</p>
                        <p style={{margin: "0px", marginLeft: "1em"}}>Date of Birth: {format(new Date(item.dob.date), 'yyyy-MM-dd')}</p>
                    </div>
                    
                    
                </div>
            })}

            
        </div>
    )
}

export default CreateUserList;