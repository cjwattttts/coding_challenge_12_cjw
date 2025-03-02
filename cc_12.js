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

metricCards.forEach(card=> { // updates each card
    const title = card.querySelector("h3"); 
    const value = card.querySelector("p"); 

    title.textContent += " - Updated"; // changes title
    value.textContent = "$1000"; // changes value

    card.style.backgroundColor = "lightgreen"; // sets background to light green
});
});
