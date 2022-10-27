const dayEl = document.querySelector(".date-day");
const dateEl = document.querySelector(".date-date");
const monthEl = document.querySelector(".date-month");
const yearEl = document.querySelector(".date-year");
const divEl = document.querySelector(".digital-clock");
const arrowHour = document.querySelector(".arrow-hour");
const arrowMinute = document.querySelector(".arrow-minute");
const arrowSecond = document.querySelector(".arrow-second");

const date = new Date();
 
const days = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пʼятниця",
  "Субота",
];

const options = {
  // weekday: "long",
  // year: "numeric",
  month: "long",
  // day: "numeric",
};

// console.log(date.toLocaleDateString("uk-UA", options));

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const setDate = (date) => {
  dayEl.textContent = days[date.getDay()];
  dateEl.textContent = date.getDate();
  monthEl.textContent = months[date.getMonth()];
  yearEl.textContent = date.getFullYear();
};

function updateTime() {
  const date = new Date();
  setDate(date);
  // console.log(date.toLocaleTimeString());
  setClock(date);
  turnArrows(date);
}
const timerId = setInterval(updateTime, 1000);

// console.log("getDay():", days[date.getDay()]);
// console.log("getMonths():", months[date.getMonth()]);

const setClock = (date) => {
  // const hours = date.getHours();
  // const transformedHours = hours.toString().padStart(2, "0");
  // const minutes = date.getMinutes();
  // const transformedMinutes = minutes.toString().padStart(2, "0");
  // const seconds = date.getSeconds();
  // // const transformedSeconds = seconds.toString().padStart(2, "0");
  // const transformedSeconds = seconds < 10 ? "0" + seconds : seconds;
  // divEl.textContent = `Поточний час: ${transformedHours}:${transformedMinutes}:${transformedSeconds}`;
  divEl.textContent = `Поточний час: ${date.toLocaleTimeString()}`;
};


function turnArrows(date) {
  const secondArrowDeg = (360 / 60) * date.getSeconds();
  arrowSecond.style.transform = `rotate(${secondArrowDeg}deg)`;

  const minutesArrowDeg =
    (360 / 60) * date.getMinutes() + (5 / 60) * date.getSeconds();
  arrowMinute.style.transform = `rotate(${minutesArrowDeg}deg)`;

  const hoursArrowDeg =
    (360 / 12) * date.getHours() + (30 / 60) * date.getMinutes();
  arrowHour.style.transform = `rotate(${hoursArrowDeg}deg)`;
}

// // console.log('getDay():', days[date.getDay()]);
// // const options = {
// //     weekday: "long",
// //     year: 'long',
// //     month: "long",
// //   day: 'long',
// // };
// // console.log(date.toLocale)
