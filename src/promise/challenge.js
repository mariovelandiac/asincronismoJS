import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
};

fetchData(`${API}/products`)
    .then(function (response) {
        return response.json()})
    .then(producto => {
        console.log(producto);
        return fetchData(`${API}/products/${producto[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log('por finn')
    })
    ;

