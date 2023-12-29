function randomTime(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function awaitPromise(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== "string") {
        reject("Error");
        return;
      }

      resolve(message);
    }, time);
  });
}

async function executePromises() {
  try {
    const level1 = await awaitPromise("Fase 1", randomTime());
    console.log(level1);

    const level2 = await awaitPromise("Fase 2", randomTime());
    console.log(level2);

    const level3 = await awaitPromise(3, randomTime());
    console.log(level3);
  } catch (error) {
    console.log(error);
  }
}

executePromises();
