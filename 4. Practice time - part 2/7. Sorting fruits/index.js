let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


function sortFruit() {
    for(let i = 0; i < fruit.length; i++){
        if(fruit[i] === "🍎"){    // fruit index = apple
            appleShelf.textContent += "🍎" // print apple + apple till finish, or looping
        } else if (fruit[i] === "🍊") { // fruit index = orange
            orangeShelf.textContent += "🍊" // print orange + orange + orange till finish, or looping
        }
    }
}

sortFruit() // we call the function