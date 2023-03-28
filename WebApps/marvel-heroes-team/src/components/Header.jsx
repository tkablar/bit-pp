import { useNavigate } from "react-router-dom";
import './Header.css'

export const Header = () => {

    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/');
    }

    return(
        <div className="container-liquid header">
            <div className="container">
                <h1 onClick={navigateToHomePage}>Hero Team</h1>
            </div> 
        </div>
    )
}