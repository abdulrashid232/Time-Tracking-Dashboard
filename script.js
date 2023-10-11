let content = document.querySelectorAll(".content");
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");

let jsonData;

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    jsonData = data;
    daily.addEventListener('click', DailyFunction);
    weekly.addEventListener('click', WeeklyFunction);
    monthly.addEventListener('click', MonthlyFunction);
    window.onload = DailyFunction();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


function DailyFunction(){
  daily.classList.add('active');
  monthly.classList.remove('active');
  weekly.classList.remove('active');
  content[0].innerHTML=` <h3>${jsonData[0].timeframes.daily.current + 'hrs'} </h3> 
  <p>${'Yesterday - '+ jsonData[0].timeframes.daily.previous + 'hrs'} </p> `
  content[1].innerHTML=` <h3>${jsonData[1].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[1].timeframes.daily.previous + 'hrs'} </p> `
  content[2].innerHTML=` <h3>${jsonData[2].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[2].timeframes.daily.previous + 'hr'} </p> `
  content[3].innerHTML=` <h3>${jsonData[3].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[3].timeframes.daily.previous + 'hr'} </p> `
  content[4].innerHTML=` <h3>${jsonData[4].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[4].timeframes.daily.previous + 'hrs'} </p> `
  content[5].innerHTML=` <h3>${jsonData[5].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[5].timeframes.daily.previous + 'hr'} </p> `
}

function WeeklyFunction(){
  daily.classList.remove('active');
  monthly.classList.remove('active');
  weekly.classList.add('active');
  content[0].innerHTML=` <h3>${jsonData[0].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[0].timeframes.weekly.previous + 'hrs'} </p> `
  content[1].innerHTML=` <h3>${jsonData[1].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[1].timeframes.weekly.previous + 'hrs'} </p> `
  content[2].innerHTML=` <h3>${jsonData[2].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[2].timeframes.weekly.previous + 'hrs'} </p> `
  content[3].innerHTML=` <h3>${jsonData[3].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[3].timeframes.weekly.previous + 'hrs'} </p> `
  content[4].innerHTML=` <h3>${jsonData[4].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[4].timeframes.weekly.previous + 'hrs'} </p> `
  content[5].innerHTML=` <h3>${jsonData[5].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[5].timeframes.weekly.previous + 'hrs'} </p> `
}

function MonthlyFunction(){
  daily.classList.remove('active');
  monthly.classList.add('active');
  weekly.classList.remove('active');
  content[0].innerHTML=` <h3>${jsonData[0].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[0].timeframes.monthly.previous + 'hrs'} </p> `
  content[1].innerHTML=` <h3>${jsonData[1].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[1].timeframes.monthly.previous + 'hrs'} </p> `
  content[2].innerHTML=` <h3>${jsonData[2].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[2].timeframes.monthly.previous + 'hrs'} </p> `
  content[3].innerHTML=` <h3>${jsonData[3].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[3].timeframes.monthly.previous + 'hrs'} </p> `
  content[4].innerHTML=` <h3>${jsonData[4].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[4].timeframes.monthly.previous + 'hrs'} </p> `
  content[5].innerHTML=` <h3>${jsonData[5].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[5].timeframes.monthly.previous + 'hrs'} </p> `
}

