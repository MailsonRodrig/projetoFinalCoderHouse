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
