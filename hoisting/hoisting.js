// Hoisting in action
/**
 * Is like having
 * var message = "Mayday!"
 */
message = "We are safe over this ship";
function askForHelp() {
  var message; // Go to the top <..>/
  message = "Mayday!"; 
}
askForHelp();
console.log(message); // It will outputs "We are safe over this ship" due var message declaration was moved to the top

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
console.log(response); // response is not available here, due inizialitations are not hoisted
var response = client.get("https://google.com");
console.log(response); // Now is available