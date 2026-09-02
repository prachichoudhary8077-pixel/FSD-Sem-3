// Exp 1
// Step 1: Module ko sirf ek baar top par import karein
const EventEmitter = require('events');

// --- PART 1: Custom EventEmitter ('greet' aur 'exit') ---
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to ABES Engineering College`);
});

myEmitter.on('exit', () => {
    console.log("Application Closed.");
});

myEmitter.emit('greet', '2nd Year, Prachi Choudhary');
myEmitter.emit('exit');


// --- PART 2: DOM-like Event Handling (Button Class) ---
class Button extends EventEmitter {}

const button = new Button();

button.on('click', () => console.log('Button Clicked'));
button.on('mouseover', () => console.log('Mouse is over the button.'));

button.emit('click');
button.emit('mouseover');