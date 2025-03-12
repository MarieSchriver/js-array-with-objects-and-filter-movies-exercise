"use strict";

// Opbygger et array med film (movies) som objekter i JavaScript
const movies = [
    { title: "Inception", genre: "science-fiction", year: 2010, duration: 2.28, img: "/img/inception.webp", url: "https://www.imdb.com/title/tt1375666/?ref_=fn_all_ttl_1" }, 
    { title: "Forrest Gump", genre: "drama", year: 1994, duration: 2.22, img: "/img/forrest-gump.webp", url: "https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_1_tt_1_nm_6_in_0_q_forres"},
    { title: "Gladiator", genre: "action", year: 2000, duration: 2.35, img: "/img/gladiator.webp", url: "https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_5_tt_4_nm_2_in_0_q_gla"},
    { title: "It", genre: "horror", year: 2017, duration: 2.15, img: "/img/it.webp", url: "https://www.imdb.com/title/tt1396484/?ref_=nv_sr_srsg_3_tt_6_nm_2_in_0_q_it"},
    { title: "Pulp Fiction", genre: "comedy", year: 1994, duration: 2.34, img: "/img/pulp-fiction.webp", url: "https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_pul"},
    { title: "Superbad", genre: "comedy", year: 2007, duration: 1.53, img: "/img/superbad.webp", url: "https://www.imdb.com/title/tt0829482/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_superbad"},
    { title: "The Conjuring", genre: "horror", year: 2013, duration: 1.52, img: "/img/the-conjuring.webp", url: "https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520conjur"},
    { title: "The Dark Knight", genre: "action", year: 2008, duration: 2.32, img: "/img/the-dark-knight.webp", url: "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark"},
    { title: "The Godfather", genre: "drama", year: 1972, duration: 2.55, img: "/img/the-godfather.webp", url: "https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520god"},
    { title: "The Hangover", genre: "comedy", year: 2009, duration: 1.40, img: "/img/the-hangover.webp", url: "https://www.imdb.com/title/tt1119646/?ref_=nv_sr_srsg_6_tt_8_nm_0_in_0_q_the%2520han"},
    { title: "The Matrix", genre: "action", year: 1999, duration: 2.16, img: "/img/the-matrix.webp", url: "https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_the%2520matri"}
];

// Henter HTML-elementerne movies-container og category-select
const moviesContainer = document.getElementById("movies-container");
const selectedCategory = document.getElementById("catagory-select");

// Funktion til at vise film i DOM'en
function displayMovies(filmListe) {
    if (!moviesContainer) return; // Sikrer, at containeren findes

    moviesContainer.innerHTML = ""; // Tømmer containeren for at undgå dubletter

    filmListe.forEach((movie) => {
        // Opretter et HTML-element (article)
        const movieElement = document.createElement("article");

        // Opbygger HTML-strukturen for hver film
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>År: ${movie.year}</p>
            <p>Varighed: ${movie.duration} timer</p>
            <figure>
                <a href="${movie.url}" target="_blank">
                    <img src="${movie.img}" alt="${movie.title}">
                </a>
            </figure>`;

        // Tilføjer movieElement til moviesContainer
        moviesContainer.appendChild(movieElement);
    });
}

// Indlæser alle film ved første sideindlæsning
displayMovies(movies);

// Tilføjer event listener til category-select for at filtrere filmene
if (selectedCategory) {
    selectedCategory.addEventListener("change", () => {
        const selectedValue = selectedCategory.value; // Henter den valgte kategori

        let filteredMovies = selectedValue === "all" 
            ? movies 
            : movies.filter(movie => movie.genre === selectedValue); 

        displayMovies(filteredMovies);
    });
}

