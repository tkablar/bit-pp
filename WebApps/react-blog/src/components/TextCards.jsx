const CreateCardsFunc = () => {
    const headline = ['Lorem', 'Ipsum', "Dolor", "Sit amet", "Consecutar", "Adipiscing"];
    const text = "Lorem ipsum dolor sit amet, consectetur";
    const textArray = ["Lorem ipsum dolor sit amet, consectetur", "adipiscing elit, sed do eiusmod tempor incididunt", "ut labore et dolore magna aliqua." ]
    return (
        <div className="container">
            {headline.map((item, i) => {
                return <div className="card" style={{backgroundColor: "#556e79", color: "white", height: "5em", width: "100%", border: "none", margin: "2em auto", padding: "1em"}}>
                    <h5  key={i}>{item}</h5>
                    
                    <p>{text}</p>
                    
                </div>
            })}

            {/* {textArray.map((item) => {
                return (".card").append(<p>{item}</p>);
            })} */}

            
        </div>
    )
}

export default CreateCardsFunc;