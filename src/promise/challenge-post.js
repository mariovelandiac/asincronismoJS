import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            //necesario indicar que lo que se está enviando es de tipo json
            'Content-Type': 'application/json',
        },
        //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
        body: JSON.stringify(data)
    });
    return response;
}

const Mario = {
    "title": "Mario Bros Car",
    "price": 200,
    "description": "El mejor carro de Mario Bros",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
  }

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, Mario)
    .then(response => response.json())
    .then(data => console.log(data));