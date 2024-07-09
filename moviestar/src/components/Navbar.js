import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/navbar.css';

/**
 * Composant de barre de navigation principale.
 *
 * @component
 * @returns {JSX.Element} Le composant `Navbar`.
 */
const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <nav>
            <ul>
                <li>
                    {isHome ? (
                        <Link to="/" className="home-link">
                            <FaHome size={30} style={{ verticalAlign: 'middle', marginBottom: '4px' }} />
                            {/* Home icon */}
                        </Link>
                    ) : (
                        <Link to="/">
                            <FaHome size={30} style={{ verticalAlign: 'middle', marginBottom: '4px' }} />
                            {/* Home icon */}
                        </Link>
                    )}
                </li>
                    <li>
                        <NavLink to="/acteurs" activeClassName="active">
                            Acteurs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/films" activeClassName="active">
                            Films
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/genres" activeClassName="active">
                            Genres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/realisateurs" activeClassName="active">
                            Réalisateurs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rechercheavancee" activeClassName="active">
                            Recherche Avancée
                        </NavLink>
                    </li>
            </ul>
        </nav>
    );
};

export default Navbar;