const h1 = document.querySelector("h1");
const input = document.querySelector( "input");
const button = document.querySelector("button");
const select = document.querySelector("select");
const container = document.querySelector(".flex-container");

const flex = document.querySelector(".flex-container")
const img = document.querySelector("#for-img")
const p = document.querySelector("#content")

const body = document.querySelector("body")
body.style.backgroundImage = "url('img/galaxy.gif')";

flex.style.display = "flex";
flex.style.justifyContent = "center";
flex.style.alignItems = "center";
flex.style.margin = "50px auto";
flex.style.gap = "20px";
flex.style.border = "2px solid white";
flex.style.width = "fit-content";
flex.style.height = "fit-content";
flex.style.padding = "30px";

p.style.color = "white";
h1.style.textAlign = "center";
h1.style.textAlign = "center";
h1.style.color = "white";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.gap = "10px";
container.style.marginTop = "20px";


button.addEventListener("click", hesapla)

function hesapla(){
    let kilo = Number (input.value);
    kilo = kilo / 9.81;
    // console.log(kilo)

    let gezegen = select.value;
    // console.log(gezegen)

    let sonuc = 0;

    if(input.value != "" && select.value != "Bir Seçim Yapın"){
        if(gezegen == "earth"){
            img.setAttribute("src", "img/earth.png");
            sonuc = kilo * 9.81
            console.log(sonuc)
        }else if (gezegen =="jupiter"){
            img.setAttribute("src", "img/jupiter.png");
            sonuc = kilo *25.8
            console.log(sonuc)
        }
        p.innerHTML = `Seçmiş olduğunuz gezegen ${gezegen}, Bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
    }

    setTimeout(function(){
        flex.style.display = "none";
        input.value = "";
        select.value = "Bir Seçim Yap"
    },3000)
}
