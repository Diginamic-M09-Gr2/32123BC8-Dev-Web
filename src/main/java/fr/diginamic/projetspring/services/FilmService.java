package fr.diginamic.projetspring.services;

import fr.diginamic.projetspring.entities.Acteur;
import fr.diginamic.projetspring.entities.Film;
import fr.diginamic.projetspring.repositories.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Service gérant les opérations liées à l'entité Film.
 */
@Service
public class FilmService {
    private final FilmRepository filmRepository;
    @Autowired
    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    /**
     * Insère un film dans la base de données.
     *
     * @param film Le film à insérer.
     */
    public static void insertFilm(Film film) {
        // Implémentation selon les besoins
    }

    /**
     * Récupère tous les films.
     *
     * @return Une liste de tous les films.
     */
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    /**
     * Récupère un film par son identifiant.
     *
     * @param id L'identifiant du film.
     * @return Le film correspondant à l'identifiant, ou un Optional vide s'il n'existe pas.
     */
    public Optional<Film> getFilmById(Long id) {
        return filmRepository.findById(id);
    }

    /**
     * Sauvegarde un film dans la base de données.
     *
     * @param film Le film à sauvegarder.
     * @return Le film sauvegardé.
     */
    public Film saveFilm(Film film) {
        return filmRepository.save(film);
    }

    /**
     * Supprime un film par son identifiant.
     *
     * @param id L'identifiant du film à supprimer.
     */
    public void deleteFilm(Long id) {
        filmRepository.deleteById(id);
    }

    /**
     * Récupère la liste des acteurs d'un film.
     *
     * @param filmId L'identifiant du film.
     * @return La liste des acteurs du film, ou une liste vide si le film n'existe pas.
     */
    public List<Acteur> getActeursByFilm(Long filmId) {
        Optional<Film> film = filmRepository.findById(filmId);
        return film.map(Film::getActeurs)
                .orElse(Collections.emptyList());
    }

    /**
     * Récupère la liste des films dans lesquels un acteur a joué.
     *
     * @param acteurId L'identifiant de l'acteur.
     * @return La liste des films dans lesquels l'acteur a joué.
     */
    public List<Film> getFilmsByActeur(Long acteurId) {
        // Implémentation selon les besoins
        return null;
    }

    /**
     * Crée un nouveau film.
     *
     * @param film Le film à créer.
     * @return Le film créé.
     */
    public Film createFilm(Film film) {
        return film;
    }

    /**
     * Met à jour un film existant.
     *
     * @param id   L'identifiant du film à mettre à jour.
     * @param film Les nouvelles données du film.
     * @return Le film mis à jour, ou un Optional vide si le film avec l'ID spécifié n'existe pas.
     */
    public Optional<Film> updateFilm(Long id, Film film) {
        // Implémentation selon les besoins
        return Optional.empty();
    }

    // Ajoutez d'autres méthodes en fonction des besoins

}
