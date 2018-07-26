/*
This function:
- calculates a random number
- accepts min and max of the dice (this case it's a 4 sided die)
- returns a random number based on min of 1 and max of 4
*/
let d4Min = 1;
let d4Max = 4;

function d4Calc(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let d4Shape = document.querySelector(".d4-shape");
let d4Text = document.querySelector(".d4-text");
/*
The following eventListeners create hover effect to change text display of
the dice.
*/
d4Shape.addEventListener('mouseenter', (e) => {
	d4Text.textContent = "Click me to roll!";
});

d4Shape.addEventListener('mouseleave', (e) => {
	d4Text.textContent = "D4";
});

/*
This eventListener waits for a click before generating a random  number
for that dice.
*/
d4Shape.addEventListener('click', (e) => {
	d4Text.textContent = d4Calc(d4Min, d4Max);
});


console.log("There will be more dice soon!");
