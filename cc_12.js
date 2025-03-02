//TASK 1
document.addEventListener('DOMContentLoaded', () => {

const dashboardContainer = document.getElementById("dashboard"); // selects dashboard container
const altDashboardSelection = document.querySelector("#dashboard"); // alternative way

const revenueCard = document.createElement("div"); 
revenueCard.setAttribute("class", "metric-card"); // assigns class
revenueCard.setAttribute("id", "revenueCard"); // assigns id

const title = document.createElement("p");
title.textContent = "Revenue"; // sets the title

const value = document.createElement("p");
title.textContent = "$0"; // sets the placeholder value

revenueCard.appendChild(title); // appends title to metric
revenueCard.appendChild(value); // appends value to metric

dashboardContainer.appendChild(revenueCard); // appends metric to dashboard

});



