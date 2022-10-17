// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorPar = document.getElementById("error")
console.log(errorPar)

function purchase(){
    console.log("button clicked")
    errorPar.textContent = "Something went wrong, please try againsssss"
}


