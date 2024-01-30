export function generateActivitiesHTML(data) {
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
