const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) { // you can write parameter as much as you want
    // Rewrite the expression using template literals
    welcomeEl.textContent = greeting + ", " + name + " 👋"
}

greetUser("Howdy", "James")