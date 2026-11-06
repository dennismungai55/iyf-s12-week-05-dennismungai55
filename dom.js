
// getElementById - returns a single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// PRACTICE: Select these elements

// 1. The h1 element
const heading = document.querySelector("h1");
console.log("H1 element:", heading);

// 2. All elements with class "content"
const allContents = document.getElementsByClassName("content");
console.log("All content elements:", allContents);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Contact form:", form);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("Navigation list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

// 7. The last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("Last paragraph:", lastParagraph);




// =====================================
// TASK 9.2: TRAVERSING THE DOM
// =====================================

const nav = document.querySelector("nav");

// Parent
console.log("Parent:", nav.parentElement);

// Children
console.log("Children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next sibling:", article.nextElementSibling);
console.log("Previous sibling:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log("Navigation links:", navLinks);


// =====================================
// PRACTICE TASKS
// =====================================

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const headerNav = header.querySelector("nav");

console.log("1. Nav inside header:", headerNav);


// 2. Select the first nav-link, then get its parent li
const firstLink = document.querySelector(".nav-link");
const parentLi = firstLink.parentElement;

console.log("2. Parent li:", parentLi);


// 3. Select the article, then get its next sibling (section)
const myArticle = document.querySelector("article");
const nextSection = myArticle.nextElementSibling;

console.log("3. Next sibling:", nextSection);


// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("nav ul");
const listItems = ul.children;

console.log("4. All list items:", listItems);


// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;

console.log("5. Body:", body);

