export let daily = document.querySelector(".daily");
export let weekly = document.querySelector(".weekly");
export let monthly = document.querySelector(".monthly");

import { jsonData } from "./script.js";


export function DailyFunction() {
  daily.classList.add('active');
  monthly.classList.remove('active');
  weekly.classList.remove('active');

  let contentContainers = document.querySelectorAll(".main-activity .content");

  jsonData.forEach((item, index) => {
      contentContainers[index].innerHTML = `<h3>${item.timeframes.daily.current + 'hrs'} </h3> 
          <p>${'Yesterday - ' + item.timeframes.daily.previous + 'hrs'} </p>`;
  });
}
export function WeeklyFunction() {
  daily.classList.remove('active');
  monthly.classList.remove('active');
  weekly.classList.add('active');

  let contentContainers = document.querySelectorAll(".main-activity .content");
  jsonData.forEach((item, index) => {
      contentContainers[index].innerHTML = `<h3>${item.timeframes.weekly.current + 'hrs'} </h3> 
          <p>${'Last Week - ' + item.timeframes.weekly.previous + 'hrs'} </p>`;
  });
}

export function MonthlyFunction() {
  daily.classList.remove('active');
  monthly.classList.add('active');
  weekly.classList.remove('active');

  let contentContainers = document.querySelectorAll(".main-activity .content");

  jsonData.forEach((item, index) => {
      contentContainers[index].innerHTML = `<h3>${item.timeframes.monthly.current + 'hrs'} </h3> 
          <p>${'Last Month - ' + item.timeframes.monthly.previous + 'hrs'} </p>`;
  });
}

