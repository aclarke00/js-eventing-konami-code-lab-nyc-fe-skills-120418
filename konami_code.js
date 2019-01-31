const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0 

const checkKeyCode = (event) => {
  const whatTheyPressed = event.keyCode
  if (whatTheyPressed === code[tracker]) {
    tracker += 1 
  } else {
    tracker = 0
  }

if (tracker === 10) {
  alert('You won, yay!')
}
  console.log(tracker)
}


function init() {
  // Write your JavaScript code inside the init() function
  // keydown
  // 1 - find an element ? no - we only need the document
  // 2 - make the function to trigger 
  document.addEventListener('keydown', checkKeyCode)
}

init()