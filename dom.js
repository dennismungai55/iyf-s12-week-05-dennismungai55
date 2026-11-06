
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


// =====================================
// TASK 10.1 - EXERCISE 1: BASIC EVENTS
// =====================================

// Create a button
const button = document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);

// Adding event listener
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);



// =====================================
// EXERCISE 2: EVENT TYPES
// =====================================

// Select elements
const element = document.querySelector(".container");
const input = document.querySelector("#name");
const form = document.querySelector("#contact-form");

// Mouse events
element.addEventListener("click", () => {
    console.log("Container clicked!");
});

element.addEventListener("dblclick", () => {
    console.log("Container double-clicked!");
});

element.addEventListener("mouseenter", () => {
    console.log("Mouse entered container!");
});

element.addEventListener("mouseleave", () => {
    console.log("Mouse left container!");
});

// Keyboard events
input.addEventListener("keydown", () => {
    console.log("Key pressed!");
});

input.addEventListener("keyup", () => {
    console.log("Key released!");
});

// Form events
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
});

input.addEventListener("focus", () => {
    console.log("Input selected!");
});

input.addEventListener("blur", () => {
    console.log("Input lost focus!");
});

input.addEventListener("input", () => {
    console.log("You typed:", input.value);
});

input.addEventListener("change", () => {
    console.log("Input changed:", input.value);
});

// Window events
window.addEventListener("load", () => {
    console.log("Page loaded!");
});

window.addEventListener("resize", () => {
    console.log("Window resized!");
});

window.addEventListener("scroll", () => {
    console.log("Page scrolled!");
});


// =====================================
// EXERCISE 3: CLICK COUNTER
// =====================================

// Create counter
let count = 0;

// Create heading
const counterTitle = document.createElement("h2");
counterTitle.textContent = "My Click Counter";

// Create display
const counterDisplay = document.createElement("h1");
counterDisplay.textContent = count;

// Create buttons
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

// Add elements to page
document.body.appendChild(counterTitle);
document.body.appendChild(counterDisplay);
document.body.appendChild(increaseBtn);
document.body.appendChild(decreaseBtn);
document.body.appendChild(resetBtn);

// Update counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Increase count
increaseBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Decrease count
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Reset count
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});




// =====================================
// TASK 10.2 - EXERCISE 1: EVENT OBJECT
// =====================================

// Mouse and click events
document.addEventListener("click", function(event) {

    // Element that was clicked
    console.log("Target:", event.target);

    // Element listening for the event
    console.log("Current Target:", event.currentTarget);

    // Event type
    console.log("Type:", event.type);

    // Mouse position
    console.log("Position:", event.clientX, event.clientY);

});

// Keyboard events
document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);

});


    
// =====================================
// EXERCISE 2: KEYBOARD SHORTCUTS
// =====================================

const shortcutForm = document.querySelector("#contact-form");

document.addEventListener("keydown", function(event) {

    // Ctrl + S: Show Saved message
    if (event.ctrlKey && event.key.toLowerCase() === "s") {

        event.preventDefault();

        alert("Saved!");
    }

    // Escape: Clear all form inputs
    if (event.key === "Escape") {

        const inputs = shortcutForm.querySelectorAll("input");

        inputs.forEach(input => {
            input.value = "";
        });

        console.log("All form inputs cleared!");
    }

    // Ctrl + Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {

        event.preventDefault();

        shortcutForm.requestSubmit();

        console.log("Form submitted!");
    }

});


shortcutForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Contact form submitted successfully!");
});



// =====================================
// TASK 10.3 - EXERCISE 1: EVENT BUBBLING
// =====================================

// Create nested HTML elements
const bubblingContainer = document.createElement("div");

bubblingContainer.innerHTML = `
    <div id="grandparent">
        Grandparent
        <div id="parent">
            Parent
            <div id="child">
                Child
            </div>
        </div>
    </div>
`;

document.body.appendChild(bubblingContainer);

// Grandparent event
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

// Parent event
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

// Child event
document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});


// =====================================
// TASK 10.3 - EXERCISE 2: EVENT DELEGATION
// =====================================

// Create task list container
const taskSection = document.createElement("section");

taskSection.innerHTML = `
    <h2>My Delegated Task List</h2>

    <form id="delegated-task-form">
        <input
            type="text"
            id="delegated-task-input"
            placeholder="Enter a new task"
            required
        >
        <button type="submit">Add Task</button>
    </form>

    <ul id="delegated-task-list">
        <li>
            <span>Learn JavaScript</span>
            <button type="button" data-action="delete">Delete</button>
        </li>

        <li>
            <span>Practise DOM</span>
            <button type="button" data-action="delete">Delete</button>
        </li>

        <li>
            <span>Build a To-Do App</span>
            <button type="button" data-action="delete">Delete</button>
        </li>
    </ul>
`;

document.body.appendChild(taskSection);

// Select elements
const delegatedList = document.querySelector("#delegated-task-list");
const delegatedForm = document.querySelector("#delegated-task-form");
const delegatedInput = document.querySelector("#delegated-task-input");

// ONE event listener on the parent UL
delegatedList.addEventListener("click", function(event) {

    // Find the closest list item
    const listItem = event.target.closest("li");

    // Make sure the item belongs to our list
    if (!listItem || !delegatedList.contains(listItem)) {
        return;
    }

    // Check whether the delete button was clicked
    const deleteButton = event.target.closest(
        'button[data-action="delete"]'
    );

    if (deleteButton && listItem.contains(deleteButton)) {

        // Delete the task
        listItem.remove();

        console.log("Task deleted!");

    } else {

        // Toggle completed class
        listItem.classList.toggle("completed");

        console.log("Task completion changed!");
    }
});

// Add new tasks
delegatedForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskText = delegatedInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create new list item
    const newTask = document.createElement("li");

    newTask.innerHTML = `
        <span></span>
        <button type="button" data-action="delete">Delete</button>
    `;

    // Safely insert user-provided text
    newTask.querySelector("span").textContent = taskText;

    // Add to list
    delegatedList.appendChild(newTask);

    // Clear input
    delegatedInput.value = "";

    console.log("New task added!");
});



// =====================================
// EXERCISE 3: TASK LIST STYLING
// =====================================

const taskStyle = document.createElement("style");

taskStyle.textContent = `
    #delegated-task-list li {
        padding: 10px;
        margin: 8px 0;
        background: #f1f5f9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 6px;
    }

    #delegated-task-list li.completed span {
        text-decoration: line-through;
        color: gray;
    }

    #delegated-task-list button {
        cursor: pointer;
        padding: 5px 10px;
    }
`;

document.head.appendChild(taskStyle);


(() => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("form-message");

    if (!form || !nameInput || !emailInput) {
        console.log("Contact form elements not found.");
        return;
    }

    // Show an error message
    function showError(input, errorMessage) {
        input.classList.add("error");

        let errorElement = input.nextElementSibling;

        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("small");
            errorElement.className = "error-message";
            input.insertAdjacentElement("afterend", errorElement);
        }

        errorElement.textContent = errorMessage;
    }

    // Clear an error message
    function clearError(input) {
        input.classList.remove("error");

        const errorElement = input.nextElementSibling;

        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.remove();
        }
    }

    // Validate name as the user types
    nameInput.addEventListener("input", function(event) {
        const value = event.target.value.trim();

        if (value.length < 2) {
            showError(nameInput, "Name must be at least 2 characters");
        } else {
            clearError(nameInput);
        }
    });

    // Validate email as the user types
    emailInput.addEventListener("input", function(event) {
        const value = event.target.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            showError(emailInput, "Please enter a valid email");
        } else {
            clearError(emailInput);
        }
    });

    // Check all fields before submission
    function isValid(data) {
        let valid = true;

        if (data.name.trim().length < 2) {
            showError(nameInput, "Name must be at least 2 characters");
            valid = false;
        } else {
            clearError(nameInput);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email.trim())) {
            showError(emailInput, "Please enter a valid email");
            valid = false;
        } else {
            clearError(emailInput);
        }

        return valid;
    }

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log("Form data:", data);

        if (isValid(data)) {
            message.textContent = "Form submitted successfully!";
            message.className = "success-message";

            form.reset();
            clearError(nameInput);
            clearError(emailInput);
        } else {
            message.textContent = "Please correct the errors above.";
            message.className = "error-message";
        }
    });

    console.log("Task 10.4 form validation is ready!");
})();





