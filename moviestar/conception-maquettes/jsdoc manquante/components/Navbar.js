// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

/**
 * Composant de barre de navigation.
 * Affiche une liste d'éléments de navigation pour différentes sections du site.
 * Utilise NavLink pour fournir un style actif à l'élément de navigation sélectionné.
 * @component
 */
const Navbar = () => {
    return (
        <nav>
            <ul>
                {/* Lien de navigation pour la page d'accueil */}
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Accueil
                    </NavLink>
                </li>
                {/* Lien de navigation pour la page des films */}
                <li>
                    <NavLink to="/films" activeClassName="active">
                        Films
                    </NavLink>
                </li>
                {/* Lien de navigation pour la page des genres */}
                <li>
                    <NavLink to="/genres" activeClassName="active">
                        Genres
                    </NavLink>
                </li>
                {/* Lien de navigation pour la page des acteurs */}
                <li>
                    <NavLink to="/acteurs" activeClassName="active">
                        Acteurs
                    </NavLink>
                </li>
                {/* Lien de navigation pour la page de recherche avancée */}
                <li>
                    <NavLink to="/rechercheavancee" activeClassName="active">
                        Recherche Avancée
                    </NavLink>
                </li>
                {/* Lien de navigation pour la page des réalisateurs */}
                <li>
                    <NavLink to="/realisateurs" activeClassName="active">
                        Réalisateurs
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
