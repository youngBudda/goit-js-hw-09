// const delay_in_ms = document.querySelector('input[name="delay"]');
// const delay_steps = document.querySelector('input[name="step"]');
// const delay_amount = document.querySelector('input[name="amount"]');
// const submitBtn = document.querySelector('button[type = "submit"]');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
let delayInp = null;
let stepInp = null;
let amountInp = null;

console.log(formEl);

function createPromise(position, delay) {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  delayInp = Number(delay.value);
  stepInp = Number(step.value);
  amountInp = Number(amount.value);

  for (let i = 1; i <= amountInp; i++) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInp += stepInp;
  }
  // e.currentTarget.reset();
};
formEl.addEventListener('submit', submitHandler);
