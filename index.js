
var el = document.querySelector("#searchHeader");
el.addEventListener("click", function () {

    let inputFilmesPesquisa = document.getElementById("inputFilmesPesquisa").value
    location.href = "./page_Search/search.html"
    let vlr = inputFilmesPesquisa

    localStorage.setItem("tituloFilme", vlr);
});

let carPrincipalImg = document.getElementById("carPrincipalImg")
let awards = document.getElementById("awards")
let plotFilme = document.getElementById("plotFilme")




const dadosFilme = [
    {
        "id": "01",
        "Plot": "Earth's mightiest heroes must come together and learn.",
        "Awards": "38 wins & 81 nominations total"
    },
    {
        "id": "02",
        "Plot": "Barbie suffers a crisis that leads her.",
        "Awards": "7 wins & 173 nominations"
    },
    {
        "id": "03",
        "Plot": "Wine noble families fight for control over the lands of Westeros.",
        "Awards": "389 wins & 634 nominations total"
    },
    {
        "id": "04",
        "Plot": "A papermaker gets involved with a murder case concerning two.",
        "Awards": "14 wins & 21 nominations"
    }

]
function repetirSlide() {

    let contador = 0
    
    
    setInterval(() => {

        if (contador === 4) {
            carPrincipalImg.style.backgroundImage = `url(./src/img/cardPrincipal.png)`;
            awards.innerHTML = "Celebrating Hispanic and Latino Superheroes"
            plotFilme.innerHTML = "From Miles Morales to Blue Beetle"
            carPrincipalImg.style.transitionDuration = "2s";
            contador = 0
        }
        else {
            carPrincipalImg.style.backgroundImage = `url(./src/img/slideImages/${dadosFilme[contador].id}.png)`;
            awards.innerHTML = dadosFilme[contador].Awards
            plotFilme.innerHTML = dadosFilme[contador].Plot

            carPrincipalImg.style.transitionDuration = "2s";
            let titleMain = document.getElementById("titleMain")
            titleMain.style.transitionProperty= "5s";

            contador++
        }
        console.log(contador)
    }, 5000);









}


repetirSlide()



