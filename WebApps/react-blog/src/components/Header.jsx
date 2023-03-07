import { Component } from "react";

export class Header extends Component {
    render() {
        const text = 'My React Blog';
        return (
            <div className="container-liquid" style={{backgroundColor: "#ec6f75", color: "white", height: "3em"}}>
                <h1 style={{fontSize: "2em", textAlign: "center"}}>{text}</h1>
            </div>
        );
    }
}