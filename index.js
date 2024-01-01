
var el = document.querySelector("#searchHeader");
el.addEventListener("click", function () {
 
    let inputFilmesPesquisa = document.getElementById("inputFilmesPesquisa").value
    location.href = "./page_Search/search.html"
    let vlr = inputFilmesPesquisa
 
    localStorage.setItem("tituloFilme", vlr);
});

let carPrincipalImg = document.getElementById("carPrincipalImg")

function iniciarSlide(){
    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/01.png)`
    }, 5000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/02.png)`
    }, 10000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/03.png)`
    }, 15000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/04.png)`
    }, 20000)
}
iniciarSlide()

function repetirSlide(){
    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/01.png)`
    }, 5000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/02.png)`
    }, 10000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/03.png)`
    }, 15000)

    setTimeout(() => {
        carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/04.png)`
    }, 20000)
 


  
}


setInterval(repetirSlide,25000)

