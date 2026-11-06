
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


// =====================================
// TASK 9.3 - EXERCISE 1: TEXT CONTENT
// =====================================

const h1 = document.querySelector("h1");

// Reading text
console.log("Text content:", h1.textContent);
console.log("Inner text:", h1.innerText);

// Modifying text
h1.textContent = "New Title";

console.log("Updated heading:", h1.textContent);



// =====================================
// EXERCISE 2: HTML CONTENT
// =====================================

const article = document.querySelector("article");

// Reading HTML
console.log("Original HTML:", article.innerHTML);

// Modifying HTML
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Security practice
const userInput = `<img src="x" onerror="alert('hacked!')">`;

// Dangerous: executes injected HTML
// Do not use with untrusted input.
// article.innerHTML = userInput;

// Safe: displays input as text
article.textContent = userInput;



// =====================================
// EXERCISE 3: ATTRIBUTES
// =====================================

const link = document.querySelector(".nav-link");

// Get attribute
console.log("Link href:", link.getAttribute("href"));
console.log("Link URL:", link.href);

// Set attribute
link.setAttribute("href", "https://developer.mozilla.org");

// Check attribute
console.log("Has target:", link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes example
// First create an element with data attributes
const element = document.createElement("div");

element.dataset.id = "123";
element.dataset.category = "tech";

document.body.appendChild(element);

console.log("ID:", element.dataset.id);
console.log("Category:", element.dataset.category);

// Create another data attribute
element.dataset.newAttr = "value";

console.log("New attribute:", element.dataset.newAttr);



// =====================================
// EXERCISE 4: STYLES
// =====================================

const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});



// =====================================
// TASK 9.4 - EXERCISE 1: CREATING ELEMENTS
// =====================================

// Create a new paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Select the article
const article = document.querySelector("article");

// Add paragraph at the end
article.appendChild(newParagraph);

// Create another paragraph
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "I am inserted before the first paragraph.";

// Insert before the first paragraph
const firstParagraph = article.querySelector("p");
article.insertBefore(anotherParagraph, firstParagraph);

// Modern insertion methods
const thirdParagraph = document.createElement("p");
thirdParagraph.textContent = "Added using prepend!";
article.prepend(thirdParagraph);

const fourthParagraph = document.createElement("p");
fourthParagraph.textContent = "Added using append!";
article.append(fourthParagraph);



// =====================================
// EXERCISE 2: REMOVING ELEMENTS
// =====================================

// Remove an element
const footer = document.querySelector("footer");

// Uncomment to test footer removal
// footer.remove();


// Remove the last navigation item
const nav = document.querySelector("nav");

const lastLink = nav.querySelector("li:last-child");


// =====================================
// EXERCISE 3: CLONING ELEMENTS
// =====================================

const navItem = document.querySelector(".nav-link").parentElement;

// Clone the navigation item
const clone = navItem.cloneNode(true);

// Change its text
clone.querySelector("a").textContent = "New Link";

// Add the cloned item to navigation
document.querySelector(".nav-list").appendChild(clone);



// =====================================
// EXERCISE 4: DYNAMIC NAVIGATION
// =====================================

function addNavItem(text, href) {

    // Create a list item
    const li = document.createElement("li");

    // Create a link
    const a = document.createElement("a");

    // Add link text
    a.textContent = text;

    // Add link URL
    a.href = href;

    // Give the link a class
    a.className = "nav-link";

    // Put the link inside the list item
    li.appendChild(a);

    // Add the list item to navigation
    document.querySelector(".nav-list").appendChild(li);
}

// Test the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");
```



