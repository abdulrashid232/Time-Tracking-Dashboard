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
    updateHTML();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
// const Jsondata =[
//   {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   },
//   {
//     "title": "Play",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 2
//       },
//       "weekly": {
//         "current": 10,
//         "previous": 8
//       },
//       "monthly": {
//         "current": 23,
//         "previous": 29
//       }
//     }
//   },
//   {
//     "title": "Study",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 7
//       },
//       "monthly": {
//         "current": 13,
//         "previous": 19
//       }
//     }
//   },
//   {
//     "title": "Exercise",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 5
//       },
//       "monthly": {
//         "current": 11,
//         "previous": 18
//       }
//     }
//   },
//   {
//     "title": "Social",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 3
//       },
//       "weekly": {
//         "current": 5,
//         "previous": 10
//       },
//       "monthly": {
//         "current": 21,
//         "previous": 23
//       }
//     }
//   },
//   {
//     "title": "Self Care",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 2,
//         "previous": 2
//       },
//       "monthly": {
//         "current": 7,
//         "previous": 11
//       }
//     }
//   }
// ]


function updateHTML() {
  const mainActivities = document.querySelectorAll('.main-activity');

  mainActivities.forEach(activity => {
    const title = activity.querySelector('h4');
    const currentHours = activity.querySelector('h3');
    const previousHours = activity.querySelector('p');

    const activityData = jsonData.find(item => item.title.toLowerCase() === title.textContent.toLowerCase());

    if (activityData) {
      currentHours.textContent = activityData.timeframes.daily
    .current + 'hrs';
      previousHours.textContent = `Yesterday-${activityData.timeframes.daily.previous}hrs`;
    }
  });
}


updateHTML();
