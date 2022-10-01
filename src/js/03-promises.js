const formRef = document.querySelector('.form');
inputsRef = {};
const promises = [];

formRef.addEventListener('input', event => {
  event.target.name;
  inputsRef[event.target.name] = event.target.value;
});

const createPromise = (position, delay) => {
  console.log(position, delay);
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
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
