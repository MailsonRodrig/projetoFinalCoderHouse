

const buttonPesquisar = document.getElementById('searchHeader')



function carregarPagina() {

    const movieTitle = localStorage.getItem("tituloFilme")

    fetch(`https://omdbapi.com/?s=${movieTitle}&page=1&apikey=bae0c5bf`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {

                localStorage.setItem("capasFilme", JSON.stringify(data))

                exibirCapaFilme(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));


    function exibirCapaFilme(movie) {

        let dadosFilme = localStorage.getItem("DescricaoFilme")
        let dadosFilmeObj = JSON.parse(dadosFilme)
        console.log(dadosFilmeObj.Title)
        console.log(dadosFilme)

        let tituloFilme = document.getElementById("tituloPesquisaFilme")
        tituloFilme.innerHTML = dadosFilmeObj.Title



        let planoFundo = document.getElementById("planoFundo")
        let planoFundoIMG = dadosFilmeObj.Poster
        planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`
        planoFundo.style.visibility = "visible"



        let imgCapa = document.getElementById("imgCapa")
        imgCapa.src = dadosFilmeObj.Poster
        imgCapa.style.visibility = "visible"

        const imgCard = document.getElementById("imgCard");

        while (imgCard.hasChildNodes()) {
            imgCard.removeChild(imgCard.firstChild);
        }




        for (let i = 0; i < 9; i++) {
            if (movie.Search[i].Poster !== "N/A") {
                let img = document.createElement("img")
                img.src = movie.Search[i].Poster

                imgCard.appendChild(img)
            }
        }
    }

    buttonPesquisar.addEventListener("click", capaFilmes)
    buttonPesquisar.addEventListener("click", descricaoFilme)



    fetch(`https://www.omdbapi.com/?apikey=fc1fef96&t=${movieTitle}&plot=full`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                formatarDescricao(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));


    function formatarDescricao(movie) {
        localStorage.setItem("DescricaoFilme", JSON.stringify(movie))

        let DescricaoFilme = localStorage.getItem("capasFilme")
        let DescricaoFilmeObj = JSON.parse(DescricaoFilme)


        let tituloFilme = document.getElementById("tituloPesquisaFilme")
        let anoFilme = document.getElementById("anoFilme")
        let classifiFilme = document.getElementById("classifiFilme")
        let plotFilme = document.getElementById("plotFilme")
        let tempoFilme = document.getElementById("tempoFilme")
        let notaFilme = document.getElementById("notaFilme")

        let inforFilme = document.getElementById("inforFilme")
        inforFilme.style.backgroundColor = "brown"

        let sobreFilmeGenre = document.getElementById("sobreFilmeGenre")
        let sobreFilmeDirector = document.getElementById("sobreFilmeDirector")
        let sobreFilmeWriter = document.getElementById("sobreFilmeWriter")
        let sobreFilmeActors = document.getElementById("sobreFilmeActors")
        let sobreFilmeLanguage = document.getElementById("sobreFilmeLanguage")

        sobreFilmeGenre.innerHTML = movie.Genre
        sobreFilmeDirector.innerHTML = movie.Director
        sobreFilmeWriter.innerHTML = movie.Writer
        sobreFilmeActors.innerHTML = movie.Actors
        sobreFilmeLanguage.innerHTML = movie.Language

        tituloFilme.innerHTML = movie.Title
        anoFilme.innerHTML = movie.Year
        plotFilme.innerHTML = movie.Plot
        classifiFilme.innerHTML = movie.Rated
        tempoFilme.innerHTML = movie.Runtime
        notaFilme.innerHTML = movie.imdbRating

    }


}

window.onload = carregarPagina()



function capaFilmes() {
    const movieTitle = document.getElementById('inputFilmesPesquisa').value;

    localStorage.setItem("tituloFilme", movieTitle);

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

    let tituloFilme = document.getElementById("tituloPesquisaFilme")
    tituloFilme.innerHTML = movie.Search[0].Title
    let anoFilme = document.getElementById("tituloPesquisaFilme")
    anoFilme.innerHTML = movie.Search[0].Title


    let planoFundo = document.getElementById("planoFundo")
    let planoFundoIMG = movie.Search[0].Poster
    planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`
    planoFundo.style.visibility = "visible"
    planoFundo.style.width = "100%"
    planoFundo.style.backgroundPosition = "center center"

    let imgCapa = document.getElementById("imgCapa")
    imgCapa.src = movie.Search[0].Poster
    imgCapa.style.visibility = "visible"

    const imgCard = document.getElementById("imgCard");



    while (imgCard.hasChildNodes()) {
        imgCard.removeChild(imgCard.firstChild);
    }







    for (let i = 0; i < 9; i++) {
        if (movie.Search[i].Poster !== "N/A") {
            let img = document.createElement("img")
            img.src = movie.Search[i].Poster

            imgCard.appendChild(img)
        }
    }



}

buttonPesquisar.addEventListener("click", capaFilmes)
buttonPesquisar.addEventListener("click", descricaoFilme)

function descricaoFilme() {

    let dadosFilme = localStorage.getItem("DescricaoFilme")
    let dadosFilmeObj = JSON.parse(dadosFilme)

    fetch(`https://www.omdbapi.com/?apikey=fc1fef96&t=${dadosFilmeObj.Title}&plot=full`)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                console.log("MMMMMMMM" + data)
                formatarDescricao(data);
            } else {
                alert(`Filme '${movieTitle}' não encontrado.`);
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

function formatarDescricao(movie) {


    let tituloFilme = document.getElementById("tituloPesquisaFilme")
    let anoFilme = document.getElementById("anoFilme")
    let classifiFilme = document.getElementById("classifiFilme")
    let plotFilme = document.getElementById("plotFilme")
    let tempoFilme = document.getElementById("tempoFilme")
    let notaFilme = document.getElementById("notaFilme")

    let sobreFilmeGenre = document.getElementById("sobreFilmeGenre")
    let sobreFilmeDirector = document.getElementById("sobreFilmeDirector")
    let sobreFilmeWriter = document.getElementById("sobreFilmeWriter")
    let sobreFilmeActors = document.getElementById("sobreFilmeActors")
    let sobreFilmeLanguage = document.getElementById("sobreFilmeLanguage")

    sobreFilmeGenre.innerHTML = movie.Genre
    sobreFilmeDirector.innerHTML = movie.Director
    sobreFilmeWriter.innerHTML = movie.Writer
    sobreFilmeActors.innerHTML = movie.Actors
    sobreFilmeLanguage.innerHTML = movie.Language


    tituloFilme.innerHTML = descricaoFilme.Title
    anoFilme.innerHTML = movie.Year
    plotFilme.innerHTML = movie.Plot
    classifiFilme.innerHTML = movie.Rated
    tempoFilme.innerHTML = movie.Runtime
    notaFilme.innerHTML = movie.imdbRating

}



