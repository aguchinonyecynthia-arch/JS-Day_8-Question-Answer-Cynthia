// CONDITIONAL STATEMENT
// IF AND ELSE

// If hour is between 6am and 12pm: Good morning! 
// If it is between 12pm and 6pm: Good afternoon! 
// Otherwise: Good evening!

let hour = +prompt('What is the time','');

if (hour <= 6 && hour < 12) {
    alert('Good morning!');
}
else if (hour >= 12 && hour <= 18) {
    alert('Good afternoon!');
}
else{
    alert('Good evening!');
}


// SWITCH AND CASE:

// lets start by declaring a variable called role, let's imagine this represents
// the role of the current user. If he/she is a guest, moderator, admin. we can 
// achieve this with IF AND ELSE statement but we are going to make use of SWITCH AND CASE.

let role = prompt('What is your role?','');

switch(role){
    case 'guest':
        alert('Hello guest');
        break;

    case 'moderator':
        alert('Hello moderator');
        break;

    case 'admin':
        alert('Hello admin');
        break;
    default:
        alert('Sorry, who did you say you are again?');
}

// USING IF AND ELSE STATEMENT TO CHECK FOR A VALUE
let whoTheFuck = prompt('Who are you?','');

if (whoTheFuck === 'guest') {
    alert('Hello guest');
}
else if (whoTheFuck === 'moderator') {
    alert('Hello moderator');
}
else if (whoTheFuck === 'admin') {
    alert('Hello admin');
}
else {
    alert('Sorry, who did you say you are again?');
}

// LOOPS

// FOR LOOP

// lets take a look at FOR LOOP:

// This is how we write a for loop:

// for (Initial expression; condition; increment expression){
    // statement
// }

// Let's say we want to display Hello World five(5) times in our console(),
// the poorest way to do so is by writing it five times.

for(let i = 0; i < 5; i++){
    console.log('Hello World');
}

// Let's make this program a bit more interesting let's say we want to display odd 
// numbers between 1 to 5. So instead of logging Hello World in the console, we can
// have an if statement and check the remainder of the division of i by 2.

// To display Odd Numbers between 1 to 5, we can do the following:

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Using the WHILE LOOP:
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Using the DO WHILE LOOP:
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


// Using the FOR...IN LOOP:

// const person ={
//     name: 'Cynthia',
//     age: 30
// };

for (let key in person)
    console.log(key, person[key]);


// Using the FOR...OF LOOP, we can iterate over an array of values, for example, we can have an array of colors and we can iterate over it using the FOR...OF LOOP.

const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);


// BREAK AND CONTINUE STATEMENTS:
// BREAK STATEMENT: The break statement is used to terminate the loop or switch statement and transfer execution to the statement immediately following the loop or switch.

let a = 0;
while (a < 10) {
    if (a === 5) break;

    console.log(a);
    a++;
}

const person = {name: 'Napoleon' , age: 30,};
for (let key in person)
    console.log(key);