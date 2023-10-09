const jsonData =[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]


let content = document.querySelectorAll(".content");
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");

window.onload = DailyFunction();
daily.addEventListener('click', DailyFunction);
weekly.addEventListener('click', WeeklyFunction);
monthly.addEventListener('click', MonthlyFunction);

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
  content[1].innerHTML=` <h3>${jsonData[1].timeframes.weekly.current + 'hr'} </h3> 
  <p>${'Last Week - '+ jsonData[1].timeframes.weekly.previous + 'hrs'} </p> `
  content[2].innerHTML=` <h3>${jsonData[2].timeframes.weekly.current + 'hr'} </h3> 
  <p>${'Last Week - '+ jsonData[2].timeframes.weekly.previous + 'hr'} </p> `
  content[3].innerHTML=` <h3>${jsonData[3].timeframes.weekly.current + 'hr'} </h3> 
  <p>${'Last Week - '+ jsonData[3].timeframes.weekly.previous + 'hr'} </p> `
  content[4].innerHTML=` <h3>${jsonData[4].timeframes.weekly.current + 'hr'} </h3> 
  <p>${'Last Week - '+ jsonData[4].timeframes.weekly.previous + 'hrs'} </p> `
  content[5].innerHTML=` <h3>${jsonData[5].timeframes.weekly.current + 'hr'} </h3> 
  <p>${'Last Week - '+ jsonData[5].timeframes.weekly.previous + 'hr'} </p> `
}

function MonthlyFunction(){
  daily.classList.remove('active');
  monthly.classList.add('active');
  weekly.classList.remove('active');
  content[0].innerHTML=` <h3>${jsonData[0].timeframes.monthly.current + 'hrs'} </h3> 
  <p>${'Last Month - '+ jsonData[0].timeframes.monthly.previous + 'hrs'} </p> `
  content[1].innerHTML=` <h3>${jsonData[1].timeframes.monthly.current + 'hr'} </h3> 
  <p>${'Last Month - '+ jsonData[1].timeframes.monthly.previous + 'hrs'} </p> `
  content[2].innerHTML=` <h3>${jsonData[2].timeframes.monthly.current + 'hr'} </h3> 
  <p>${'Last Month - '+ jsonData[2].timeframes.monthly.previous + 'hr'} </p> `
  content[3].innerHTML=` <h3>${jsonData[3].timeframes.monthly.current + 'hr'} </h3> 
  <p>${'Last Month - '+ jsonData[3].timeframes.monthly.previous + 'hr'} </p> `
  content[4].innerHTML=` <h3>${jsonData[4].timeframes.monthly.current + 'hr'} </h3> 
  <p>${'Last Month - '+ jsonData[4].timeframes.monthly.previous + 'hrs'} </p> `
  content[5].innerHTML=` <h3>${jsonData[5].timeframes.monthly.current + 'hr'} </h3> 
  <p>${'Last Month - '+ jsonData[5].timeframes.monthly.previous + 'hr'} </p> `
}

