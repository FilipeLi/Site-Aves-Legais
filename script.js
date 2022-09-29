  function MudaDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

async function requisitaImagem(){
    const url="https://zoo-animal-api.herokuapp.com/animals/rand"
    const response = await fetch(url);
    var resposta = await response.json()

    var image = document.getElementById("animal")    
    const response2 = await fetch(url);
    var resposta2 = await response2.json()

    var image2 = document.getElementById("animal2")
    const response3 = await fetch(url);
    var resposta3 = await response3.json()

    setTimeout(() => {  console.log("World!"); }, 500);
  
    var image3 = document.getElementById("animal3")
    image.src=resposta.image_link
    image2.src=resposta2.image_link
    image3.src=resposta3.image_link
}
var cont=0;
window.onscroll=function(){
  if(cont<1)
    requisitaImagem()
  cont++
}
