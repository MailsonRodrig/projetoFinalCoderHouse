function searchMovie() {
    const apiKey = 'fc1fef96';
    const baseUrl = 'http://www.omdbapi.com/';

    const movieTitle = document.getElementById('movieTitle').value;

    fetch(`${baseUrl}?apikey=${apiKey}&t=${movieTitle}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                displayMovieDetails(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

function displayMovieDetails(movie) {

    let tituloFilme = document.getElementById("mln")
    let anoFilme = document.getElementById("anoFilme")
    let classifiFilme = document.getElementById("classifiFilme")
    let plotFilme = document.getElementById("plotFilme")
    let tempoFilme = document.getElementById("tempoFilme")
    let notaFilme = document.getElementById("notaFilme")
    let imgCapa = document.getElementById("imgCapa")

    let planoFundo = document.getElementById("planoFundo")
    let planoFundoIMG = movie.Poster
    planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`
 

    imgCapa.src = movie.Poster;
    notaFilme.innerHTML = movie.Ratings[1].Value
    tituloFilme.innerHTML = movie.Title
    anoFilme.innerHTML = movie.Year
    plotFilme.innerHTML = movie.Plot
    classifiFilme.innerHTML = movie.Rated
    tempoFilme.innerHTML = movie.Runtime


    let mln01 = document.getElementById("mln01")
    mln01.src = movie.Poster

 
}