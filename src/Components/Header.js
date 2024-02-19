import React from "react";
import {Link} from "react-router-dom";
import Logo from "../Images/CharlesLogo.png"

function Header () {

    const homePage = "/Accueil";
    const galerie = "./galerie";
    const tarifsPrestations ="/TarifsPrestations";
    const contact = "/Contact";
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
                        <Link to={homePage} alt="Accueil">Accueil</Link>
                    </li>
                    <li>
                        <Link to={galerie} alt="Galerie">Galerie</Link>
                    </li>
                    <li>
                        <Link to={tarifsPrestations} alt="Tarifs&Prestations">Tarifs&Prestations</Link>
                    </li>
                    <li>
                         <Link to={contact} alt="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;