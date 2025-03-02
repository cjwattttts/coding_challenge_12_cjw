//TASK 1
document.addEventListener('DOMContentLoaded', () => {

const dashboardContainer = document.getElementById("dashboard"); // selects dashboard container
const altDashboardSelection = document.querySelector("#dashboard"); // alternative way

const revenueCard = document.createElement("div"); 
revenueCard.setAttribute("class", "metric-card"); // assigns class
revenueCard.setAttribute("id", "revenueCard"); // assigns id

const title = document.createElement('h3');
title.textContent = 'Revenue'; // sets the title

const value = document.createElement('p');
value.textContent = '$0'; // sets the placeholder value

revenueCard.appendChild(title); // appends title to metric
revenueCard.appendChild(value); // appends value to metric

dashboardContainer.appendChild(revenueCard); // appends metric to dashboard
console.log('Added revenue card to dashboard');

//TASK 2 

const metricCards = document.querySelectorAll(".metric-card"); // selects all metric cards

const metricCardsArray = Array.from(metricCards); // converts nodelist to array

metricCardsArray.forEach(card=> { // updates each card
    card.textContent += " - Updated"; // updates text
    card.computedStyleMap.backgroundColor = "lightgreen"; // sets background to light green 
    });
});
