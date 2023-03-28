import { HeroCard } from "./HeroCard"
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "./getData";
import SearchBar from "./SearchBar";
import './mainPage.css'
import { MyTeam } from "./MyTeam";


export const MainPage = () => {

    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    // const [id, setId] = useState(localStorage.getItem("id"))

    const getObject = async () => {
        const response = await getData("http://gateway.marvel.com/v1/public/characters?apikey=62aede2a3926ab0dee344d704a7a0481");
        console.log("get object> ", response);
        return response;
    }

    useEffect(() => {
        getObject().then(response => {
            setData(response.data.results);
            setDataCopy(response.data.results);
            console.log("useEffect> ", response.data.results);
        });
    }, []);



    return (
        <div className="container">

            <div className="search-bar">
                <SearchBar dataCopy={dataCopy} setData={setData} />
            </div>
            <div className="container d-flex">
                <div className="hero-cards" style={{ width: "70%", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                    {data.map((item, i) => {

                        return <div key={i} style={{ width: '30%' }}>
                            <HeroCard name={item.name} image={`${item.thumbnail.path}.${item.thumbnail.extension}`} id={item.id} i={i} />
                        </div>
                    })}
                </div>
                <div className="my-team">
                    <p>My Team</p>
                </div>
            </div>
        </div>
    )
}