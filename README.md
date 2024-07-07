# Projet Internet Movie Database - FRONT

## Objectifs

L'objectif de ce projet est de développer la partie FRONT permettant de dialoguer avec votre application SPRING BOOT.

## Tâches

### Tâche n°1 : Configurer CORS
Configurer le CORS dans votre application Spring Boot pour permettre les requêtes cross-origin.
```java
package fr.diginamic.projetspring.config;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class CustomCorsConfigurer implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
                .allowedHeaders("Content-Type");
    }
}
```

### Tâche n°2 : Dépôt GitHub

#### Option 1 : Créer un nouveau dépôt au niveau de votre organisation GitHub et partagez-le avec les formateurs. Y placer votre site web ainsi que le document de maquettage au format PDF.

#### Option 2 : Réutiliser le dépôt de votre projet Spring Boot.

### Tâche n°3 : Réaliser une maquette filaire
Réaliser une maquette filaire de votre site web (2 ou 3 écrans) en utilisant des outils comme Figma ou Balsamiq. Inclure cette maquette dans le dépôt GitHub.

### Tâche n°4 : Mettre en place des pages HTML dynamiques
Réaliser un site avec un bandeau de navigation permettant d'accéder aux différentes fonctionnalités. Le site doit permettre les actions suivantes :

1. Gestion des genres : lister les genres existants, ajout, modification, suppression
2. Recherche de tous les films d’un acteur donné : nom et années de sortie
3. Modification d’un film
4. Recherche de tous les rôles d’un film donné
5. Recherche des films sortis entre 2 années données
6. Recherche des films communs à 2 acteurs ou actrices donnés
7. Affichage de tous les films d’un genre donné
8. Recherche des acteurs communs à 2 films donnés
9. Modification d’un acteur
10. Recherche de tous les films d’un réalisateur donné
11. Recherche des films sortis entre 2 années données et ayant un acteur/actrice donné parmi les acteurs
12. Recherche des acteurs associés au genre dans lequel ils ont le plus joué
    
### Exigences supplémentaires
. Utiliser ReactJS pour créer les composants dynamiques.
. Utiliser CSS ou Bootstrap pour le style et la mise en page.

## Installation

### 1. Cloner le dépôt GitHub :
``` bash
git clone https://github.com/Diginamic-M09-Gr3/32123BC8-Dev-Web.git
cd 32123BC8-Dev-Web
``` 
### 2. Installer les dépendances :
``` bash
npm install
``` 
### 3. Démarrer l'application :
```bash
npm start
```
## Contributeurs
- Berrabah Fatima
- Alfred Christopher
- Cormerais Dorian
- Mougani Christ

