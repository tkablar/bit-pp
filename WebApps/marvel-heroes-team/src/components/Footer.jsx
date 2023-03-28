import './Footer.css'

export const Footer = ({link, text} ) => {

    return (
        <div className="container-liquid footer">
            <div className="container">
                {link}
                <p> {text}; Tamara Kablar 2023;</p>
            </div>
        </div>
    )
}