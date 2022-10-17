let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " " // sentence[i] is how you render,, not sentence.length, double check for space (" ")
}


/* it will shows :
Exit Code 1 means that a container terminated, typically due to an application error or an invalid reference. 
An application error is a programming error in any code running within the container. <<<< from HTML >>>>
*/

