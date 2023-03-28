import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const SearchBar = ({ dataCopy, setData }) => {

    const [value, setValue] = useState('')
    
    const searchData = () => {
        console.log(dataCopy)
        const data = dataCopy.filter(item=> item.name.toLowerCase().includes(value.toLowerCase()));
        setData(data);
    }

    const onChangeInp=(event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }

    return <div style={{margin: "1em"}}>
        <FaSearch/>
        <input type="search"  onChange={onChangeInp}/>
        <button onClick={searchData}>Go</button>
    </div>
}

export default SearchBar;