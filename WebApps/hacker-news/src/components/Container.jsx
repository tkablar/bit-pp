import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../service";
import { AutoStory } from "./AutoStory";
import Item from "./Item";

const Container = () => {

    const [data, setData] = useState([]);
    const getIds = async ()=> {
        const response = await  getData("https://hacker-news.firebaseio.com/v0/topstories.json");
        return response;
    }
    useEffect(()=> {
        getIds().then(response=> {
            setData(response.slice(0, 10));
        });
    }, [])

    return <div>
        {data.map((item, i)=> <Item key={i} id={item}/>)}
    </div>
}

export default Container;