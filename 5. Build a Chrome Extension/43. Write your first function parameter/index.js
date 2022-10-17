const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${Ria} ${emoji}`    
}

greetUser("Howdy", "Ria", "😍")