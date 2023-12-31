let movieIconM = document.getElementById("movieIconM")
let videoFrame = document.getElementById("videoFrame")

function assistirFilme(){
    location.href = "https://www.youtube.com/embed/XgWUDbYfNe4?autoplay=1"
}

movieIconM.addEventListener("click",assistirFilme)


var el = document.querySelector("#searchHeader");
el.addEventListener("click", function () {

    let inputFilmesPesquisa = document.getElementById("inputFilmesPesquisa").value
    location.href = "../page_Search/search.html"
    let vlr = inputFilmesPesquisa

    localStorage.setItem("tituloFilme", vlr);
});

let dadosFilme = localStorage.getItem("DescricaoFilme")
let dadosFilmeObj = JSON.parse(dadosFilme)
console.log(dadosFilmeObj.Title)
console.log(dadosFilme)

let notaFilmeMovie = document.getElementById("notaFilmeMovie")
let tituloPesquisaFilme = document.getElementById("tituloPesquisaFilme")
let ducaraMovie = document.getElementById("ducaraMovie")
let categoriaMovie = document.getElementById("categoriaMovie")
let dataMovie = document.getElementById("dataMovie")
let plotMovieDesc = document.getElementById("plotMovieDesc")
let imgMovie = document.getElementById("imgMovie")
let videoTrayler = document.getElementById("videoTrayler")

tituloPesquisaFilme.innerHTML = dadosFilmeObj.Title
notaFilmeMovie.innerHTML = dadosFilmeObj.Year
ducaraMovie.innerHTML = dadosFilmeObj.Runtime
categoriaMovie.innerHTML = dadosFilmeObj.Genre
dataMovie.innerHTML = dadosFilmeObj.Released
plotMovieDesc.innerHTML = dadosFilmeObj.Plot
imgMovie.src = dadosFilmeObj.Poster

videoTrayler.style.backgroundImage = `url("${dadosFilmeObj.Poster}")`
console.log(dadosFilmeObj.Poster)