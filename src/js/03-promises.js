import Notiflix from 'notiflix';
const formRef = document.querySelector('.form');
const inputsRef = {};
const promises = [];

formRef.addEventListener('input', event => {
  event.target.name;
  inputsRef[event.target.name] = event.target.value;
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

formRef.addEventListener('submit', event => {
  event.preventDefault();

  for (let i = 0; i < inputsRef.amount; i++) {
    const delay = Number(inputsRef.delay) + Number(inputsRef.step) * i;
    const position = i + 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            position: 'center-center',
            cssAnimationStyle: 'from-top',
          }
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            position: 'center-center',
            cssAnimationStyle: 'from-top',
          }
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
