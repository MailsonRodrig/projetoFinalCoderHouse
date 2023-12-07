function searchMovie() {
    const apiKey = 'fc1fef96';
    const baseUrl = 'http://www.omdbapi.com/';

    const movieTitle = document.getElementById('movieTitle').value;

    fetch(`${baseUrl}?apikey=${apiKey}&t=${movieTitle}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

function displayMovieDetails(movie) {
    const movieDetailsElement = document.getElementById('movieDetails');

    let tituloFilme = document.getElementById("mln")
    let anoFilme = document.getElementById("anoFilme")
    let classifiFilme = document.getElementById("classifiFilme")
    let plotFilme = document.getElementById("plotFilme")
    let tempoFilme = document.getElementById("tempoFilme")
    let notaFilme = document.getElementById("notaFilme")
    let imgCapa = document.getElementById("imgCapa")

    let planoFundo = document.getElementById("planoFundo")
    let planoFundoIMG = movie.Poster

    imgCapa.src = movie.Poster;
    planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`
    notaFilme.innerHTML = movie.Ratings[1].Value
    tituloFilme.innerHTML = movie.Title
    anoFilme.innerHTML = movie.Year
    plotFilme.innerHTML = movie.Plot
    classifiFilme.innerHTML = movie.Rated
    tempoFilme.innerHTML = movie.Runtime

    movieDetailsElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p><strong>Ano:</strong> ${movie.Year}</p>
                <p><strong>Classificação:</strong> ${movie.Rated}</p>
                <p><strong>Gênero:</strong> ${movie.Genre}</p>
                <!-- Adicione mais detalhes conforme necessário -->
            `;
}