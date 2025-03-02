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

const revenueCard = createCard("Revenue", "$0"); // sets rev to 0
dashboardContainer.appendChild(revenueCard); 

const profitCard = createCard("Profit", "$0"); // sets profit to 0
dashboardContainer.appendChild(profitCard);

const expensesCard = createCard("Expenses", "$0") // sets expenses to 0
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

// TASK 3
document.addEventListener('DOMContentLoaded', () => {

    function createProductItem(productName) {
        const productItem = document.createElement("li"); // creates a list item for the product
        productItem.setAttribute("class", "product-item"); // adds class to product item
        productItem.textContent = productName; // sets product name as text content

        productItem.addEventListener('click', () => {
            productItem.parentNode.removeChild(productItem); // removes clicked product item from list
        })

        return productItem; // returns product item
    }

    const inventoryList = document.getElementById("inventoryList"); // selects inv list container

    function addProduct(productName) {
        const productItem = createProductItem(productName); // creates a new product item
        inventoryList.appendChild(productItem); // appends new product item to inv list
    }

    addProduct("Product 1");
    addProduct("Product 2");
    addProduct("Product 3");

    const addButton = document.querySelector("#addProductButton"); // adds event listener for button to add more products
    addButton.addEventListener('click', () => {
        const productName = prompt("Enter product name:"); // prompts user for product name
        if (productName) {
            addProduct(productName); // calls function to add product to list
        }
    });
});