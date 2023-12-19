
var el = document.querySelector("#searchHeader");
el.addEventListener("click", function () {
 
    let inputFilmesPesquisa = document.getElementById("inputFilmesPesquisa").value
    location.href = "./page_Search/search.html"
    let vlr = inputFilmesPesquisa
 
    localStorage.setItem("tituloFilme", vlr);
});
