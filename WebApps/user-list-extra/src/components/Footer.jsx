const CreateFooter = () => {
    const text = '© 2023 Copyright BIT';
        return (
            <div className="container-liquid" style={{backgroundColor: "#ec6f75", color: "white", height: "2em", padding: "2em 2em", paddingTop: "1.5em", position: "fixed", left: "0", bottom: "0", width: "100%"}}>
                <p style={{fontSize: "1em", textAlign: "left", margin: "none"}}>{text}</p>
            </div>
        );
}

export default CreateFooter