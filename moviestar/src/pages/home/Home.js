import React from 'react';
import './home.css';

/**
 * Composant fonctionnel représentant la page d'accueil de l'application.
 *
 * @returns {JSX.Element} Composant Home
 */
const Home = () => {
    return (
        <div className="home-page-container">
            <img className="home-full-width-image"
                src={`${process.env.PUBLIC_URL}/images/cinemaa.jpg`}
                alt="Cinema"
            />

            <div className="home-info-window">
                <p>
                    🎬✨ Bienvenue sur Film Harmonie - Votre Source Infinie de Cinéma. Explorez un univers cinématographique sans limites. Retrouvez instantanément vos réalisateurs, acteurs, et films préférés notés par le grand public. Plongez dans une variété de genres, explorez des collaborations uniques d'acteurs, et découvrez le classement des meilleurs films de tous les temps. Bienvenue sur Film Harmonie 🌟🍿
                </p>
            </div>
        </div>
    );
};

export default Home;
