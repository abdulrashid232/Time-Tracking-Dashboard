import { generateActivitiesHTML } from "./card.js";
import { DailyFunction,WeeklyFunction,MonthlyFunction, daily,weekly,monthly } from "./functions_utils.js";



export let jsonData;

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    jsonData = data;
    generateActivitiesHTML(jsonData);
    daily.addEventListener('click', DailyFunction);
    weekly.addEventListener('click', WeeklyFunction);
    monthly.addEventListener('click', MonthlyFunction);
    window.onload = DailyFunction();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


