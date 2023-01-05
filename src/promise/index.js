const promise = new Promise(function (resolve, reject) {
    resolve('hey!');
})


const cows = 15;

const countCows = new Promise(function (resolve, reject){
    if (cows > 10) {
        resolve(`Holi, hay suficientes vacas mi pez, hay ${cows} vacas en total`);
        reject(`No hay errores`)
    } else {
        resolve(`No se resolvió`)
        reject(`Nada mi fafa, no hay suficientes vacas`);
    }
});

countCows.then(function (result){
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(function () {
    console.log(`Listo mi fafa, se cumplió la promesa`)
});
