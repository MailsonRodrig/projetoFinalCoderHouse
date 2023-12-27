//https://omdbapi.com/?t=hero&page=2&apikey=bae0c5bf


const buttonPesquisar = document.getElementById('searchHeader')



function carregarPagina() {
    
    const movieTitle = localStorage.getItem("tituloFilme")

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


    function exibirCapaFilme(movie) {

        let tituloFilme = document.getElementById("tituloPesquisaFilme")
        tituloFilme.innerHTML = movie.Search[0].Title
        let anoFilme = document.getElementById("tituloPesquisaFilme")
        anoFilme.innerHTML = movie.Search[0].Title


        let planoFundo = document.getElementById("planoFundo")
        let planoFundoIMG = movie.Search[2].Poster
        planoFundo.style.backgroundImage = `url("${planoFundoIMG}")`
        planoFundo.style.visibility = "visible"

        let imgCapa = document.getElementById("imgCapa")
        imgCapa.src = movie.Search[0].Poster
        imgCapa.style.visibility = "visible"

        const imgCard = document.getElementById("imgCard");

        while (imgCard.hasChildNodes()) {
            imgCard.removeChild(imgCard.firstChild);
        }




        for (let i = 1; i < 9; i++) {
            let img = document.createElement("img")
            img.src = movie.Search[i].Poster

            imgCard.appendChild(img)
        }
    }

    buttonPesquisar.addEventListener("click", capaFilmes)
    buttonPesquisar.addEventListener("click", descricaoFilme)



    //https://omdbapi.com/?t==${movieTitle}&page=2&apikey=bae0c5bf&plot=full

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

        let tituloFilme = document.getElementById("tituloPesquisaFilme")
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

        console.log(movie)
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

    let imgCapa = document.getElementById("imgCapa")
    imgCapa.src = movie.Search[0].Poster
    imgCapa.style.visibility = "visible"

    const imgCard = document.getElementById("imgCard");

    while (imgCard.hasChildNodes()) {
        imgCard.removeChild(imgCard.firstChild);
    }




    for (let i = 1; i < 9; i++) {
        let img = document.createElement("img")
        img.src = movie.Search[i].Poster

        imgCard.appendChild(img)
    }
}

buttonPesquisar.addEventListener("click", capaFilmes)
buttonPesquisar.addEventListener("click", descricaoFilme)

function descricaoFilme() {

    const movieTitle = localStorage.getItem("tituloFilme")

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
}

function formatarDescricao(movie) {

    let tituloFilme = document.getElementById("tituloPesquisaFilme")
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

    console.log(movie.Plot)
}



