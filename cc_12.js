//TASK 1
document.addEventListener('DOMContentLoaded', () => {

function createCard(titleText, valueText) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card"); // assigns class

    const title = document.createElement('h3');
    title.textContent = titleText; // sets title

    const value = document.createElement('p');
    value.textContent = valueText; // sets value

    card.appendChild(title); // appends title to metric card
    card.appendChild(value); // appends value to metric card

    return card;
}

const dashboardContainer = document.getElementById("dashboard"); // selects dashboard container
const altDashboardSelection = document.querySelector("#dashboard"); // alternative way

const revenueCard = createCard("Revenue", "$0");
dashboardContainer.appendChild(revenueCard);

const profitCard = createCard("Profit", "$0");
dashboardContainer.appendChild(profitCard);

const expensesCard = createCard("Expenses", "$0")
dashboardContainer.appendChild(expensesCard);

console.log('Added revenue, expenses, and profit card to dash');

//TASK 2 

const metricCards = document.querySelectorAll(".metric-card"); // selects all metric cards

metricCards.forEach(card=> { // updates each card
    const title = card.querySelector("h3"); 
    const value = card.querySelector("p"); 

    title.textContent += " - Updated"; // changes title
    value.textContent = "$0"; // changes value

    card.style.backgroundColor = "lightgreen"; // sets background to light green
});
});
