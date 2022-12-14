import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let intervalID = null;
const btnRef = document.querySelector('button[data-start]');
btnRef.disabled = true;
const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timerTime = selectedDates[0].getTime() - Date.now();
    if (timerTime <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-center',
        borderRadius: '10px',
        clickToClose: true,
      });
      return;
    }
    Notiflix.Notify.success('This date is valid !', {
      position: 'center-center',
      borderRadius: '10px',
      clickToClose: true,
    });
    btnRef.disabled = false;
    btnRef.addEventListener('click', () => {
      intervalID = setInterval(() => {
        let delta = selectedDates[0].getTime() - Date.now();
        if (delta <= 0) {
          clearInterval(intervalID);
          btnRef.disabled = true;
          return;
        }
        const data = convertMs(delta);
        refs.days.textContent = addLeadingZero(data.days);
        refs.hours.textContent = addLeadingZero(data.hours);
        refs.minutes.textContent = addLeadingZero(data.minutes);
        refs.seconds.textContent = addLeadingZero(data.seconds);
      }, 1000);
    });
  },
};
const fp = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value >= 3) {
    String(value).padStart(3, '0');
  }
  return String(value).padStart(2, '0');
}
