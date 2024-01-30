// let content = document.querySelectorAll(".content");
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
    generateActivitiesHTML(jsonData);
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
  
  let contentContainers = document.querySelectorAll(".main-activity .content");
  contentContainers[0].innerHTML = `<h3>${jsonData[0].timeframes.daily.current + 'hrs'} </h3> 
    <p>${'Yesterday - ' + jsonData[0].timeframes.daily.previous + 'hrs'} </p> `;
  contentContainers[1].innerHTML=` <h3>${jsonData[1].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[1].timeframes.daily.previous + 'hrs'} </p> `
  contentContainers[2].innerHTML=` <h3>${jsonData[2].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[2].timeframes.daily.previous + 'hr'} </p> `
  contentContainers[3].innerHTML=` <h3>${jsonData[3].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[3].timeframes.daily.previous + 'hr'} </p> `
  contentContainers[4].innerHTML=` <h3>${jsonData[4].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[4].timeframes.daily.previous + 'hrs'} </p> `
  contentContainers[5].innerHTML=` <h3>${jsonData[5].timeframes.daily.current + 'hr'} </h3> 
  <p>${'Yesterday - '+ jsonData[5].timeframes.daily.previous + 'hr'} </p> `
}

function WeeklyFunction(){
  daily.classList.remove('active');
  monthly.classList.remove('active');
  weekly.classList.add('active');

  let contentContainers = document.querySelectorAll(".main-activity .content");
  contentContainers[0].innerHTML=` <h3>${jsonData[0].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[0].timeframes.weekly.previous + 'hrs'} </p> `
  contentContainers[1].innerHTML=` <h3>${jsonData[1].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[1].timeframes.weekly.previous + 'hrs'} </p> `
  contentContainers[2].innerHTML=` <h3>${jsonData[2].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[2].timeframes.weekly.previous + 'hrs'} </p> `
  contentContainers[3].innerHTML=` <h3>${jsonData[3].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[3].timeframes.weekly.previous + 'hrs'} </p> `
  contentContainers[4].innerHTML=` <h3>${jsonData[4].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[4].timeframes.weekly.previous + 'hrs'} </p> `
  contentContainers[5].innerHTML=` <h3>${jsonData[5].timeframes.weekly.current + 'hrs'} </h3> 
  <p>${'Last Week - '+ jsonData[5].timeframes.weekly.previous + 'hrs'} </p> `
}

function MonthlyFunction(){
  daily.classList.remove('active');
  monthly.classList.add('active');
  weekly.classList.remove('active');

  let contentContainers = document.querySelectorAll(".main-activity .content");
  contentContainers[0].innerHTML=` <h3>${jsonData[0].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[0].timeframes.monthly.previous + 'hrs'} </p> `
  contentContainers[1].innerHTML=` <h3>${jsonData[1].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[1].timeframes.monthly.previous + 'hrs'} </p> `
  contentContainers[2].innerHTML=` <h3>${jsonData[2].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[2].timeframes.monthly.previous + 'hrs'} </p> `
  contentContainers[3].innerHTML=` <h3>${jsonData[3].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[3].timeframes.monthly.previous + 'hrs'} </p> `
  contentContainers[4].innerHTML=` <h3>${jsonData[4].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[4].timeframes.monthly.previous + 'hrs'} </p> `
  contentContainers[5].innerHTML=` <h3>${jsonData[5].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[5].timeframes.monthly.previous + 'hrs'} </p> `
}


function generateActivitiesHTML(data) {
  let mainActivitiesGrip = document.querySelector(".main-activities-grip");

  data.forEach(item => {
    let mainActivity = document.createElement("div");
    mainActivity.classList.add("main-activity", item.title.toLowerCase().replace(/\s+/g, '-'));

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img");
    let img = document.createElement("img");
    img.src = `images/icon-${item.title.toLowerCase().replace(/\s+/g, '-')}.svg`;
    img.alt = item.title;
    imgContainer.appendChild(img);

    let activityContent = document.createElement("div");
    activityContent.classList.add("activity-content");

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title");
    let title = document.createElement("h4");
    title.textContent = item.title;
    let ellipsisImg = document.createElement("img");
    ellipsisImg.src = "images/icon-ellipsis.svg";
    ellipsisImg.alt = "Ellipsis";
    titleContainer.appendChild(title);
    titleContainer.appendChild(ellipsisImg);

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("content"); 
    let h3 = document.createElement("h3");
    h3.textContent = ""; 
    let p = document.createElement("p");
    p.textContent = "";
    contentContainer.appendChild(h3);
    contentContainer.appendChild(p);

    activityContent.appendChild(titleContainer);
    activityContent.appendChild(contentContainer);

    mainActivity.appendChild(imgContainer);
    mainActivity.appendChild(activityContent);

    mainActivitiesGrip.appendChild(mainActivity);
  });
}
