// import { Report } from 'notiflix/build/notiflix-report-aio';
  

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
 
  const arg = {
    delay: delay.value,
    step: step.value,
    amount:amount.value,
  };    
  
  event.currentTarget.reset();  

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
    console.log()
    for (let i = 0; i < arg.amount; i++) {
      let position = i + 1;
      let delay = Number(arg.delay) + Number(arg.step) * i;       
     
  createPromise(position, delay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};
};
