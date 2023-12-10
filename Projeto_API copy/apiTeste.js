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

    let imgCard = document.getElementById("imgCard")
    let img = document.querySelector("#imgCard img")

    if (img) {
        imgCard.removeChild(img)
    }
    else {
        for (let i = 0; i < 8; i++) {
            let img = document.createElement("img")
            img.src = movie.Search[i].Poster

            imgCard.appendChild(img)
        }

    }


}


buttonPesquisar.addEventListener("click", capaFilmes)
buttonPesquisar.addEventListener("click", descricaoFilme)

function descricaoFilme() {

    const movieTitle = document.getElementById('movieTitle').value;

    fetch(`http://www.omdbapi.com/?apikey=fc1fef96&t=${movieTitle}`)
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

    let inforFilme = document.getElementById("inforFilme")
    inforFilme.style.backgroundColor = "brown"



    tituloFilme.innerHTML = movie.Title
    anoFilme.innerHTML = movie.Year
    plotFilme.innerHTML = movie.Plot
    classifiFilme.innerHTML = movie.Rated
    tempoFilme.innerHTML = movie.Runtime
    notaFilme.innerHTML = `${movie.Metascore} %`


    let mln01 = document.getElementById("mln01")
    mln01.src = movie.Poster

    console.log("voce clicou")
}



