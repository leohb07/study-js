function randomTime(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function awaitPromise(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") {
      reject("Error");
      return;
    }

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

const arrayOfPromise = [
  "Primeiro Valor",
  awaitPromise("Promise 1", randomTime(1, 3)),
  awaitPromise("Promise 2", randomTime(1, 3)),
  awaitPromise("Promise 3", randomTime(1, 3)),
  // awaitPromise(1000, randomTime(1, 3)),
  "Ultimo Valor",
];

// Promise all => Se alguma promise falhar, todas falharam
Promise.all(arrayOfPromise)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Promise race => Entrega o valor da primeira promise que for resolvida
Promise.race(arrayOfPromise)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Promise resolve / reject => Entrega uma promise resolvida
function downloadPage() {
  const hasPageInCache = false;

  if (hasPageInCache) {
    return Promise.resolve("Pagina em cache");
  }

  return awaitPromise("Downloading page", randomTime(1, 7));
}

downloadPage()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
