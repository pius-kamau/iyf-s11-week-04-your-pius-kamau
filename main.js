
// LESSON 7: JAVASCRIPT BASICS


console.log(' LESSON 7 ');

// 7.1: Variables 
console.log('\n--- 7.1 Variables ---');

// Creating variables
let studentName = 'Pius';
let studentAge = 25;
let isStudent = true;
let favoriteColors = ['blue', 'green', 'red'];

console.log('Name: ' + studentName);
console.log('Age: ' + studentAge);
console.log('Is student: ' + isStudent);
console.log('Favorite colors: ' + favoriteColors);

// let vs const
let score = 100;
score = 150;
console.log('Score: ' + score);

const pi = 3.14;
console.log('Pi: ' + pi);

//  7.2: Operators 
console.log('\n--- 7.2 Operators ---');

// Math operations
let num1 = 10;
let num2 = 3;

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
console.log(num1 + ' % ' + num2 + ' = ' + (num1 % num2));

// String operations
let firstName = 'Pius';
let lastName = 'Kamau';
let fullName = firstName + ' ' + lastName;

console.log('Full name: ' + fullName);
console.log('Uppercase: ' + fullName.toUpperCase());
console.log('First letter: ' + firstName[0]);

// Comparisons
console.log('Is 5 > 3? ' + (5 > 3));
console.log('Is 5 < 3? ' + (5 < 3));
console.log('Is 5 === 5? ' + (5 === 5));

// Age calculations
let birthYear = 1999;
let currentYear = 2026;
let age = currentYear - birthYear;

console.log('\nAge calculations:');
console.log('My age: ' + age);
console.log('Age in days: ' + (age * 365));
console.log('Year I turn 100: ' + (birthYear + 100));

// 7.3: Functions 
console.log('\n--- 7.3 Functions ---');

// Simple function
function sayHello(name) {
    return 'Hello ' + name + '!';
}
console.log(sayHello('Alice'));

// Add two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log('5 + 3 = ' + addNumbers(5, 3));

// Check if even
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Is 7 even? ' + isEven(7));
console.log('Is 4 even? ' + isEven(4));

// Area of rectangle
function getArea(width, height) {
    return width * height;
}
console.log('Area of 5x4: ' + getArea(5, 4));

// Celsius to Fahrenheit
function convertTemp(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log('25C = ' + convertTemp(25) + 'F');

// Get initials
function getInitials(name) {
    let parts = name.split(' ');
    let first = parts[0][0];
    let second = parts[1][0];
    return first + second;
}
console.log('Initials of John Doe: ' + getInitials('John Doe'));

// Reverse a string
function reverseString(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result = result + text[i];
    }
    return result;
}
console.log('Reverse of hello: ' + reverseString('hello'));

// Tip calculator
function calculateTip(bill, percent) {
    if (percent === undefined) {
        percent = 15;
    }
    return (bill * percent) / 100;
}
console.log('Tip on $50 at 15%: $' + calculateTip(50));
console.log('Tip on $50 at 20%: $' + calculateTip(50, 20));

// 7.4: Control Flow 
console.log('\n--- 7.4 Control Flow ---');

// Grade calculator
function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log('Score 85 = ' + getGrade(85));
console.log('Score 55 = ' + getGrade(55));

// Day of week
function getDayName(number) {
    if (number === 0) return 'Sunday';
    if (number === 1) return 'Monday';
    if (number === 2) return 'Tuesday';
    if (number === 3) return 'Wednesday';
    if (number === 4) return 'Thursday';
    if (number === 5) return 'Friday';
    if (number === 6) return 'Saturday';
    return 'Invalid';
}
console.log('Day 0: ' + getDayName(0));
console.log('Day 3: ' + getDayName(3));

// For loop
console.log('\nCounting 1 to 5:');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop
console.log('\nCounting down 5 to 1:');
let counter = 5;
while (counter > 0) {
    console.log(counter);
    counter--;
}

// Loop through array
let fruits = ['apple', 'banana', 'orange'];
console.log('\nMy fruits:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// FizzBuzz
console.log('\nFizzBuzz 1 to 15:');
for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Star triangle
console.log('\nStar triangle:');
for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line = line + '*';
    }
    console.log(line);
}


// LESSON 8: ARRAYS AND OBJECTS


console.log('\n=== LESSON 8 ===');

// 8.1: Arrays 
console.log('\n--- 8.1 Arrays ---');

// Create array
let animals = ['dog', 'cat', 'bird'];
console.log('Animals: ' + animals);
console.log('First animal: ' + animals[0]);

// Add and remove
animals.push('fish');
console.log('After push: ' + animals);

animals.pop();
console.log('After pop: ' + animals);

animals.unshift('rabbit');
console.log('After unshift: ' + animals);

animals.shift();
console.log('After shift: ' + animals);

// Array methods
let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map(function(n) {
    return n * 2;
});
console.log('Doubled: ' + doubled);

// Get even numbers
let evens = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log('Even numbers: ' + evens);

// Sum all numbers
let total = numbers.reduce(function(sum, n) {
    return sum + n;
}, 0);
console.log('Sum: ' + total);

// Check if 3 is in array
console.log('Includes 3? ' + numbers.includes(3));

// Practice with array methods
let mixed = [1, -2, 3, -4, 5];

let doubleAll = mixed.map(function(n) {
    return n * 2;
});
console.log('Double all: ' + doubleAll);

let positives = mixed.filter(function(n) {
    return n > 0;
});
console.log('Positive only: ' + positives);

//  8.2: Objects 
console.log('\n--- 8.2 Objects ---');

// Create object
let person = {
    firstName: 'Pius',
    lastName: 'Kamau',
    age: 30,
    city: 'New York'
};

// Access properties
console.log('First name: ' + person.firstName);
console.log('Last name: ' + person.lastName);
console.log('Age: ' + person.age);
console.log('City: ' + person.city);

// Change properties
person.age = 31;
person.email = 'john@example.com';
console.log('Updated age: ' + person.age);
console.log('Email: ' + person.email);

// Object with methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log('5 + 3 = ' + calculator.add(5, 3));
console.log('5 - 3 = ' + calculator.subtract(5, 3));

// Loop through object
let scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log('\nScores:');
for (let subject in scores) {
    console.log(subject + ': ' + scores[subject]);
}

//  8.3: Array of Objects 
console.log('\n--- 8.3 Array of Objects ---');

// Student data
let studentList = [
    { name: 'Alice', grade: 85, major: 'CS' },
    { name: 'Bob', grade: 72, major: 'Math' },
    { name: 'Charlie', grade: 90, major: 'CS' },
    { name: 'Diana', grade: 88, major: 'Physics' }
];

// Get all names
let allNames = studentList.map(function(s) {
    return s.name;
});
console.log('All names: ' + allNames);

// Get students with grade > 80
let highAchievers = studentList.filter(function(s) {
    return s.grade > 80;
});
console.log('High achievers:');
for (let i = 0; i < highAchievers.length; i++) {
    console.log('  ' + highAchievers[i].name + ': ' + highAchievers[i].grade);
}

// Find Charlie
let charlieStudent = studentList.find(function(s) {
    return s.name === 'Charlie';
});
console.log('Found Charlie:');
console.log(charlieStudent);

// Calculate average grade
let gradeTotal = 0;
for (let i = 0; i < studentList.length; i++) {
    gradeTotal = gradeTotal + studentList[i].grade;
}
let gradeAverage = gradeTotal / studentList.length;
console.log('Average grade: ' + gradeAverage);

// Get CS majors only
let csStudents = studentList.filter(function(s) {
    return s.major === 'CS';
});
console.log('CS majors:');
for (let i = 0; i < csStudents.length; i++) {
    console.log('  ' + csStudents[i].name);
}

console.log('\nAll done!');