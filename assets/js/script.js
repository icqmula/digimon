var url = "https://digimon-api.vercel.app/api/digimon"
var contenido = document.querySelector("#contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        
            contenido.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            
              <p class="card-text">${item.level}</p>
              
              <a href="#" class="btn btn-primary">Imprimir</a>
            </div>
            </div>
            </div>
            `
            if (item.name == "aaaaa") {break;}
        }
    
})

$("#boton2").click(function(){
  $("#contenido").css("background-color","cyan")
  $(".card-text").css("color","red")
  

})
document.querySelectorAll('#imprimir').forEach(function(element) {
  element.addEventListener('click', function() {
      print();
  });
});