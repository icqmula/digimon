var url = "https://digimon-api.vercel.app/api/digimon" 
var contenido = document.querySelector("#contenido")
var contenidoArmor = document.querySelector("#contenidoArmor")
var contenidoChampion = document.querySelector("#contenidoChampion")
var contenidoFresh = document.querySelector("#contenidoFresh")
var contenidoIntraining = document.querySelector("#contenidoIntraining")
var contenidoMega = document.querySelector("#contenidoMega")
var contenidoRookie = document.querySelector("#contenidoRookie")
var contenidoUltimate = document.querySelector("#contenidoUltimate")

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenido.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/armor`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoArmor.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/champion`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoChampion.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/fresh`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoFresh.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/intraining`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoIntraining.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/mega`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoMega.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/rookie`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoRookie.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

fetch(`${url}/level/ultimate`)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
            contenidoUltimate.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre:${item.name}</h5>
              <p class="card-text">Nivel:${item.level}</p>
              <a href="${item.level}.html" class="btn btn-primary">Ver el nivel</a>
            </div>
            </div>
            </div>
            `
            if (item.id == "a1a1") {break;}
    }
})

document.querySelectorAll('#imprimir').forEach(function(element) {
  element.addEventListener('click', function() {
      print();
  });
});