// simple billing system
let products=prompt("enter no. of products");
let prices=[];
let discounted_price=[];
let bill=0;
let final_bill=0;
let total_bill=0;
for(let i=0;i<products;i++){
    let ProductName = prompt("Enter product Name:");
    let quantity=prompt("enter quantity of product:");
    let price= prompt("enter price of product");

    // Calculations
    bill=price*quantity;
    prices.push(bill);

    //discount
    let discount=0;
    if(bill>10000){
        discount=0.1*bill;
    }
    else if(bill>4000){
        discount=0.06*bill;
    }
    else{
        discount=0.04*bill;
    }

    discounted_price.push(bill-discount);
    final_bill+=(bill-discount);

}




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



