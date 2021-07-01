// Hoisting in action
function askForHelp() {
  message = "Mayday!";
  console.log(message);
  var message; // Declaration is hoisted to the top of the current scope <..>/
}
askForHelp();

//---------------------------
// Error example
class Client {
  constructor() {}
  get(somewhere) {
    console.log(`Making a request to ${somewhere}...`);
    
    return {code: 200};
  }
}
const client = new Client();
console.log("Beep!");
console.log("Response is: ", response); // undefined
var response = client.get("https://google.com");
console.log("Now response is: ", response); // Now is available