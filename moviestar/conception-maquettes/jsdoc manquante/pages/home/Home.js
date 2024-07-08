// src/pages/Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../../components/Home.css'; // Assurez-vous d'importer le fichier de styles CSS

/**
 * Composant pour la page d'accueil du site.
 * @component
 * @returns {JSX.Element} Composant Home.
 */
const Home = () => {
    // Animation pour le titre
    const titleAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500, // Délai pour retarder l'animation
    });

    // Animation pour la fenêtre d'information
    const windowAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1000,
        marginTop: -100, // Valeur de margin-top appropriée pour le mouvement vers le bas
    });

    return (
        <div className="home-page">
            {/* Titre animé */}
            <animated.h1 style={titleAnimation} className="title">
                Bienvenue sur Film Harmonie
            </animated.h1>

            {/* Image en plein écran */}
            <img
                src={`${process.env.PUBLIC_URL}/images/cinemaa.jpg`}
                alt="Cinema"
                className="full-width-image"
            />

            {/* Fenêtre d'information animée */}
            <animated.div style={windowAnimation} className="info-window">
                <p>
                    Bienvenue sur Film Harmonie - Votre Source Infinie de Cinéma 🎬✨. Explorez un univers cinématographique sans limites. Retrouvez instantanément vos réalisateurs, acteurs, et films préférés notés par le grand public. Plongez dans une variété de genres, explorez des collaborations uniques d'acteurs, et découvrez le classement des meilleurs films de tous les temps. Bienvenue sur Film Harmonie 🌟🍿.
                </p>
            </animated.div>
        </div>
    );
};

export default Home;
