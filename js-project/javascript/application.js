// ////////
// Select DOM elements
// ////////

console.log("hello from application.js");



// with its ID (select Charles's photo)

// document.querySelector("any CSS selector");
// const charles = document.querySelector("#Nainoa"); // html element
// console.log(charles);


// document.getElementById("Nainoa");



// with its tag type (select the group number)

// const groupNumber = document.querySelector("h2");
// console.log(groupNumber);



// with its class (select the class group)

// const groups = document.querySelector(".group");
// console.log(groups);


// select multiple elements (select all the cards)
const cards = document.querySelectorAll(".card");
// console.log(cards);

// cards.forEach((card) => {
//   console.log(card); 
// });


// turn a NodeList into an actual array
const cardsArray = Array.from(cards); // this gives me an array made from the cards nodelist
// console.log(cardsArray);


// 1. Step 1 select elements you need from the page document.querySelector(css selector)



// ////////
// Modify the DOM
// ////////

// Add an HTML element (add Noemi to the yokohama team)


const noemi = `<li>
            <img id="Noemi" src="https://d26jy9fbi4q9wx.cloudfront.net/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOGVyQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba2eb58a94a9128a5782b531ac7aac3964f908a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQWNocEFjaDdCam9KWTNKdmNEb09ZWFIwWlc1MGFXOXUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--b67d9ded4d28d0969fbb98b4c21b79257705a99a/noemi-ashizuka.jpg" alt="">
            <p>Noemi</p>
          </li> `

// 1. select elements we need from the dom
const ul = document.querySelector("#yoko ul");
// console.log(ul);

// 2. modify the DOM (add a new li to the list)
ul.insertAdjacentHTML("beforeend", noemi);


// Change the element style (group background to green)
const group = document.querySelector(".group");
// console.log(group);

// CSS background-color: green;
group.style.backgroundColor = "green";
// group.style.color = "white";


// Add a class to the element (add text-white to groups)

// in CSS file I have .text-white class

group.classList.add("text-white");

// Remove it

group.classList.remove("text-italic");
// group.classList.toggle("text-italic");


// Read/Write for inputs (change the value in the email input)

const email = document.querySelector("#email");
// console.log(email.value);
email.value = "hi, don't email me"


// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)
const yokoTitle = document.querySelector("#yoko h3");
// yokoTitle.innerText = "Best Team";
// yokoTitle.innerHTML => 'Yokohama <em>FC</em> ⚽️'
// yokoTitle.textContent => 'Yokohama FC ⚽️' (same as innerText)
// yokoTitle.outerHTML => '<h3>Yokohama <em>FC</em> ⚽️</h3>'

// read the html inside the group div


const groups = document.querySelector(".group");

groups.innerHTML = "Good luck with the JS challenges"

