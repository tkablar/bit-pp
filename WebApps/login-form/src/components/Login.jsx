import { useState } from "react";

export const AutoLogin = () => {

    const [userName, setUserName] = useState()
    const [passWord, setPassWord] = useState()

    const changeUsername = (event) => {
        setUserName(event.target.value);
        // console.log(userName);
    }

    const changePassword = (event) => {
        setPassWord(event.target.value);
        // console.log(passWord);
    }

    const alertFields = () => {
        alert(`username: ${userName} password: ${passWord}`); 
        // console.log(`username alert`, userName);
        // console.log("password alert", passWord); 
    }

    const clearFields = () => {
        setUserName("");
        setPassWord("");
        // console.log(userName, passWord);
    }

    return (
        <div style={{backgroundColor: "white", width: "30%", height: "18em", margin: "0px auto", marginTop: "5em"}}>
            <h1>Login</h1>
            <input id='username' onChange={changeUsername} placeholder={"username"} value={userName}></input>
            <input id='password' type={"password"} onChange={changePassword} placeholder={"password"} value={passWord}></input>
            <button className='login' onClick={alertFields}>Login</button>
            <button className='reset' onClick={clearFields}>reset</button>
        </div>
    )
}



