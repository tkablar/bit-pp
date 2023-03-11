
const CreateHeader = () => {
    const text = 'Hacker News';
        return (
            <div className="container-liquid" style={{backgroundColor: "#ea5421", color: "white", height: "6em", padding: "2em 2em", paddingTop: "1.5em" }}>
                <h1 style={{fontSize: "2em", textAlign: "left", margin: "none"}}>{text}</h1>
            </div>
        );
}

export default CreateHeader