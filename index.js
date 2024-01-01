
var el = document.querySelector("#searchHeader");
el.addEventListener("click", function () {

    let inputFilmesPesquisa = document.getElementById("inputFilmesPesquisa").value
    location.href = "./page_Search/search.html"
    let vlr = inputFilmesPesquisa

    localStorage.setItem("tituloFilme", vlr);
});

let carPrincipalImg = document.getElementById("carPrincipalImg")




function repetirSlide() {
    
    const imgSlides = ["01", "02", "03", "04"]

    let contador = 0
    setInterval(() =>{
   
        if(contador === 4){
            carPrincipalImg.style.backgroundImage = `url(../src/img/cardPrincipal.png)`;
            contador = 0
        }
        else{
            console.log(contador)
            carPrincipalImg.style.backgroundImage = `url(../src/img/slideImages/${imgSlides[contador]}.png)`;
            contador++

        }
    }, 4000);









}


repetirSlide()

