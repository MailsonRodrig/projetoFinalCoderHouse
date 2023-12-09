const buttonPesquisar = document.getElementById('buttonPesquisar')

function capaFilmes() {
    const movieTitle = document.getElementById('movieTitle').value;

    fetch(`https://omdbapi.com/?s=${movieTitle}&page=1&apikey=bae0c5bf`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                exibirCapaFilme(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

function exibirCapaFilme(movie) {

    let tituloFilme = document.getElementById("mln")
    tituloFilme.innerHTML = movie.Search[0].Title
    let anoFilme = document.getElementById("mln")
    anoFilme.innerHTML = movie.Search[0].Title


    let planoFundo = document.getElementById("planoFundo")
    let planoFundoIMG = movie.Search[2].Poster
    planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`

    let mln01 = document.getElementById("mln01")
    mln01.src = movie.Search[0].Poster

    let mln02 = document.getElementById("mln02")
    mln02.src = movie.Search[1].Poster

    let mln03 = document.getElementById("mln03")
    mln03.src = movie.Search[2].Poster

    let mln04 = document.getElementById("mln04")
    mln04.src = movie.Search[3].Poster

    let mln05 = document.getElementById("mln05")
    mln05.src = movie.Search[4].Poster

    let mln06 = document.getElementById("mln06")
    mln06.src = movie.Search[5].Poster

    let mln07 = document.getElementById("mln07")
    mln07.src = movie.Search[6].Poster

    let mln08 = document.getElementById("mln08")
    mln08.src = movie.Search[7].Poster

    let mln09 = document.getElementById("mln09")
    mln09.src = movie.Search[8].Poster

    console.log(movie)

}



function descricaoFilme() {
    const apiKey = 'fc1fef96';
    const baseUrl = 'http://www.omdbapi.com/';

    const movieTitle = document.getElementById('movieTitle').value;

    fetch(`${baseUrl}?apikey=${apiKey}&t=${movieTitle}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                formatarDescricao(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

function formatarDescricao(movie) {

    let tituloFilme = document.getElementById("mln")
    let anoFilme = document.getElementById("anoFilme")
    let classifiFilme = document.getElementById("classifiFilme")
    let plotFilme = document.getElementById("plotFilme")
    let tempoFilme = document.getElementById("tempoFilme")
    let notaFilme = document.getElementById("notaFilme")
 

 
   
    tituloFilme.innerHTML = movie.Title
    anoFilme.innerHTML = movie.Year
    plotFilme.innerHTML = movie.Plot
    classifiFilme.innerHTML = movie.Rated
    tempoFilme.innerHTML = movie.Runtime


    let mln01 = document.getElementById("mln01")
    mln01.src = movie.Poster

    console.log("voce clicou")
}


 
 