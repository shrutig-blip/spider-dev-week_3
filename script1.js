// Student Result Calculator
let studentName = prompt("Enter Student Name:");
let subjects = ["English", "Maths", "Science", "Computer", "Social Studies"];
let marks = [];
let total = 0;
let highest = -1;
let lowest = 101;

// Taking input for marks
for (let i = 0; i < subjects.length; i++) {
    let mark;
    while (true) {
        mark = Number(prompt(`Enter marks for ${subjects[i+1]} (0-100):`));
        if (mark >= 0 && mark <= 100) {
            break;
        } else {
            alert("Invalid marks! Please enter a value between 0 and 100.");
        }
    }
    marks.push(mark);
    total += mark;
    if (mark > highest) {
        highest = mark;
    }
    if (mark < lowest) {
        lowest = mark;
    }
}

// Calculations
let average = total / subjects.length;
let percentage = (total / (subjects.length * 100)) * 100;
let grade;
let rank;

// Grade & Rank
if (percentage >= 90) {
    grade = "A+";
    rank = "Excellent";
}
else if (percentage >= 80) {
    grade = "A";
    rank = "Very Good";
}
else if (percentage >= 70) {
    grade = "B";
    rank = "Good";
}
else if (percentage >= 50) {
    grade = "C";
    rank = "Average";
}
else {
    grade = "Fail";
    rank = "Needs Improvement";
}

// Display subject marks
console.log("------ Student Report ------");
console.log("Student Name:", studentName);
console.log("----------------------------");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i] + ": " + marks[i]);
}
console.log("----------------------------");
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Rank:", rank);
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);

// Day-based motivational message
let day = prompt(
    "Enter Day (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):"
);

switch (day.toLowerCase()) {
    case "monday":
        console.log("New week, new opportunities! Keep learning.");
        break;
    case "tuesday":
        console.log("Stay consistent. Success comes from daily effort.");
        break;
    case "wednesday":
        console.log("Halfway there! Keep pushing forward.");
        break;
    case "thursday":
        console.log("Believe in yourself. You're doing great.");
        break;
    case "friday":
        console.log("Finish the week strong!");
        break;
    case "saturday":
        console.log("Relax, revise, and recharge.");
        break;
    case "sunday":
        console.log("Prepare well for the coming week!");
        break;
    default:
        console.log("Invalid day entered.");
}



