import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../service";
import { AutoStory } from "./AutoStory";

const Item = ({id}) => {
    const [data, setData] = useState({});
    const getResponse = async ()=> {
        const response = await  getData(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return response;
    }
    useEffect(()=> {
        getResponse().then(resp=> {
            setData(resp);
        });
    },[id])

    return <AutoStory userName={data.by} title={data.title} score={data.score} time={data.time} comments={data.descendants} id={data.id} />
}

export default Item;