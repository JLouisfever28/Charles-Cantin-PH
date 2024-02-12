import React, { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../Images/CharlesLogo.png"

function Header () {

    const [homePage, setHomePage] = useState("/")
    const [galerie, setGaleriePage] = useState("/")
    const [tarifsPrestations, setTarifsPrestationsPage] = useState("/")
    const [contact, setContactPage] = useState("/")
    return (
            <div className="container">
            <div className="logo">
                <img
                    src={Logo}
                    alt="Logo"
                />
            </div>
            <div className="title">
                <h1>Charles Cantin - Photographe</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to={homePage} alt="Accueil" onClick={() => setHomePage("/Accueil")}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={galerie} alt="galerie" onClick={() => setGaleriePage("/Galerie")}>Galerie</Link>
                    </li>
                    <li>
                        <Link to={tarifsPrestations} alt="Tarifs&Prestations" onClick={() => setTarifsPrestationsPage("/TarifsPrestations")}>Tarifs&Prestations</Link>
                    </li>
                    <li>
                         <Link to={contact} alt="contact" onClick={() => setContactPage("/contact")}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;