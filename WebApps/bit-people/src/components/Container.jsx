import { useEffect } from "react";
import { useState } from "react";
import { getData } from "./getData";
import { CreateUserList } from "./CreateUserList";
import { CreateUserCard } from "./CreateUserCards";
import CreateHeader from "./CreateHeader";
import SearchBar from "./SearchBar";
import CreateFooter from "./CreateFooter";

const Container = () => {

    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();


    const getObject = async () => {
        const response = await getData("https://randomuser.me/api/?results=15");
        console.log("get object> ", response);
        return response;
    }

    useEffect(() => {
        getObject().then(response => {
            setData(response.results);
            setDataCopy(response.results);
            setDate(new Date());
            console.log(date.getSeconds())
            console.log("useEffect> ", response.results);
        });
    }, []);

    return (
    <div>
        <CreateHeader setVisible={setVisible} visible={visible} />
        <SearchBar setData={setData} dataCopy={dataCopy} />
        <div className="container" style={{ width: '80%', marginLeft: "auto", marginRight: 'auto', marginTop: '1.2em', marginBottom: "10em" }}>
            {data.map((item, i) => {

                if (!visible) {
                    return (
                    <div>
                        <CreateUserList className={"user-card show"} image={item.picture.large} name={item.name.first} lastName={item.name.last} email={item.email} dob={item.dob.date} id={i} gender={item.gender} />

                    </div>
                    )
                } else {
                    return <CreateUserCard className={"user-card hide"} image={item.picture.large} name={item.name.first} email={item.email} dob={item.dob.date} id={i} gender={item.gender} />
                }

            })}
        </div>
        <CreateFooter date={date} hours={hours} minutes={minutes} seconds={seconds}/>
    </div>
    )
}

export default Container;