// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// import Notyfy library
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  min: document.querySelector('[data-minutes]'),
  sec: document.querySelector('[data-seconds]'),
  };
  
  refs.startBtn.disabled = true;
  let startTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const onSelectDate = selectedDates[0].getTime();
    const currentDate = new Date().getTime();

    if (onSelectDate > currentDate) {
        refs.startBtn.removeAttribute('disabled');
        refs.startBtn.addEventListener('click', timer);
        startTime = onSelectDate;
    }
    else {
        refs.startBtn.setAttribute('disabled', true);
        Notify.failure('Please choose a date in the future');
    };
  },
};

flatpickr(refs.input, options);

function timer() {
  const selectDate = startTime;
  let timeId = setInterval(() => {
      const currenTime = new Date();
      const time = selectDate - currenTime;
      if (time > 0) {
          convertMs(time);
          refs.startBtn.setAttribute('disabled', true);
      }
      else {
          clearInterval(timeId);
      };
  }, 1000);
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padZero(Math.floor(ms / day));
  // Remaining hours
  const hours = padZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padZero(Math.floor((((ms % day) % hour) % minute) / second));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.min.textContent = minutes;
  refs.sec.textContent = seconds; 
};

function padZero(value){
  return String(value).padStart(2, '0');
};


