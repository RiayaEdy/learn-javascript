// template strings/literals

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `
Hey ${recipient}! 

How is it going? 

Cheers ${sender}` // or we can use \n

console.log(email)