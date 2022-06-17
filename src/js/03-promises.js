// import { Report } from 'notiflix/build/notiflix-report-aio';

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const obj = { position: position, delay: delay };

      if (shouldResolve) {
        resolve(obj)
      } else {
        reject(obj)
      }
    }, delay);
  });
};

function handleSubmit(event) {
  event.preventDefault();
  const {
     delay:{ valueAsNumber: delay = 0 },
     step:{ valueAsNumber: step = 0 },
     amount:{ valueAsNumber: amount = 0 }
} = event.currentTarget;

  let delayProm = delay;

  for (let position = 0; position < amount; ++position) {

    createPromise(position, delayProm).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayProm += step;
  };

  //event.currentTarget.reset();
};