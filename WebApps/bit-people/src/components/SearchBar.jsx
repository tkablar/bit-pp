import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const SearchBar = ({ dataCopy, setData }) => {
    const [value, setValue] = useState('')
    
    const searchData = (event) => {
        const inputValue = event.target.value;
        const data = dataCopy.filter(item=> item.name.first.toLowerCase().includes(inputValue.toLowerCase())
         || item.name.last.toLowerCase().includes(inputValue.toLowerCase()));
        setData(data);
        setValue(inputValue);
    }

    return <div style={{margin: "1em"}}>
        <FaSearch/>
        <input type="search" value={value} onChange={searchData} style={{width: "77%", border: "none", borderBottom: "1px solid #ababab", padding: "0.5em"}} />
    </div>
}

export default SearchBar;