$(document).ready(function () {

    let llamado = fetch('https://digimon-api.vercel.app/api/digimon').then(response => response.json());
    llamado.then(datos => listado(datos));

    $('#digiButton').click(function (datos) {
        llamado.then(datos => digimon(datos));
    });
});

function listado(datos) {
    datos.forEach(elem => {
        document.getElementById('digiLista').innerHTML += `<div><a class="fs-3" style="text-decoration: none;" href='https://digimon-api.vercel.app/api/digimon/name/${elem.name}' alt="${elem.name}"'>${elem.name}</a></div>`;
    });
};

function digimon(datos) {
    let busqueda = document.getElementById('digiInput').value.toLowerCase();
    let imagen = document.getElementById('digiImagen');
    let nombre = document.getElementById('digiNombre');
    let nivel = document.getElementById('digiNivel');
    let nombres = [];
    datos.forEach(elem => {
        nombres.push(elem.name.toLowerCase());
        if (elem.name.toLowerCase() === busqueda) {
            imagen.setAttribute('src', elem.img);
            imagen.setAttribute('alt', elem.name);
            nombre.textContent = elem.name;
            nivel.textContent = elem.level;
        };
    });
    if (!nombres.includes(busqueda)) {
        alert('No se encontró un Digimon con el nombre ingresado. Intente nuevamente.')
    }
};

