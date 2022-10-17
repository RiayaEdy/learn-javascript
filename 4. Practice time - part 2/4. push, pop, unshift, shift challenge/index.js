let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift() >>>> push - add last >>>> pop - delete last
// Google how to use unshift() and shift() >>>> unshift - add first >>>> shift - delete first


largeCountries.pop() // let it empty
largeCountries.push(Pakistan)
largeCountries.shift() // let it empty
largeCountries.unshift(China)


console.log(largeCountries)