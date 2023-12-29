function randomTime(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function awaitPromise(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

// Codigo assincrono
awaitPromise("Conectando com o BD", randomTime(1, 3))
  .then((response) => {
    console.log(response);
    return awaitPromise("Buscando dados", randomTime(1, 3));
  })
  .then((response) => {
    console.log(response);
    return awaitPromise("Tratando os dados", randomTime(1, 3));
  })
  .then((response) => console.log(response))
  .then(() => console.log("Exibindo dados"));
