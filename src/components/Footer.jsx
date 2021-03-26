import React from "react"

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="footer">
            <footer>
                <p>Anniina Aarnio {year}</p>
            </footer>
        </div>
    )
}

export default Footer;