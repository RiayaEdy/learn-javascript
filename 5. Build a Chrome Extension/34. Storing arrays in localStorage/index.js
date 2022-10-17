let myLeads = `["www.awesomelead.com"]`

myLeads =JSON.parse(myLeads) // to turn the myLeads string into an array

myLeads.push("www.lead2.com") // to push new value to the array

myLeads = JSON.stringify(myLeads) // turn the array into a string again

console.log(typeof myLeads) // verify the string use typeof that its string



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
