//Grade calculator of sgpa

// prints ten times repeatadly using for loop
let name1 = prompt("Enter your Name = ");
let sem = prompt("Enter your current sem = ");
console.log("Name = " + name1);
console.log("Sem = " + sem);
let total1 = 0,
  total2 = 0,
  total3 = 0,
  total4 = 0,
  total5 = 0,
  total6 = 0,
  total7 = 0,
  total8 = 0,
  total9 = 0,
  total10 = 0;
// let result = [];
for (i = 1; i <= 10; i++) {
  // getting input from the user

  let sub = prompt("Enter the " + i + "st subject name = ");
  let sub1 = sub.toUpperCase();
  console.log("Subject Name = " + sub1);

  // getting input of subject credit
  let credit;
  while (true) {
    let creditInput = prompt("Enter the "+ sub + " subject credit = ");
    credit = parseInt(creditInput);
    console.log("Subject Credit = " + credit);

    // Checks the condition if the value is number or string

    if (!isNaN(credit)) {
      break; // exit the loop if a valid number is entered
    } else {
      console.log("Enter only numbers. Please try again.");
    }
  }

  // getting input of external marks
  let external;
  while (true) {
    let externalInput = prompt(
      "Enter the " + sub + " subject external marks = "
    );
    external = parseInt(externalInput);
    console.log("external Subject Marks = " + external);

    //checks the condition whether the input is string or number
    if (!isNaN(external)) {
      break;
    } else {
      console.log("Enter only numbers. Please try again.");
    }
  }

  // Checking the condition

  if (external >= 90 && external <= 100) {
    total1 += 10 * credit;
    console.log("After calculated with the total marks = " + total1);
  } else if (external >= 80 && external <= 89) {
    total2 += 9 * credit;
    console.log("After calculated with the total marks = " + total2);
  } else if (external >= 70 && external <= 79) {
    total3 += 8 * credit;
    console.log("After calculated with the total marks = " + total3);
  } else if (external >= 60 && external <= 69) {
    total4 += 7 * credit;
    console.log("After calculated with the total marks = " + total4);
  } else if (external >= 50 && external <= 59) {
    total5 += 6 * credit;
    console.log("After calculated with the total marks = " + total5);
  } else if (external >= 40 && external <= 49) {
    total6 += 5 * credit;
    console.log("After calculated with the total marks = " + total6);
  } else if (external >= 30 && external <= 39) {
    total7 += 4 * credit;
    console.log("After calculated with the total marks = " + total7);
  } else if (external >= 20 && external <= 29) {
    total8 += 3 * credit;
    console.log("After calculated with the total marks = " + total8);
  } else if (external >= 10 && external <= 19) {
    total9 += 2 * credit;
    console.log("After calculated with the total marks = " + total9);
  } else {
    total10 += 1 * credit;
    console.log("After calculated with the total marks = " + total10);
  }
}
let total11 =
  total1 +
  total2 +
  total3 +
  total4 +
  total5 +
  total6 +
  total7 +
  total8 +
  total9 +
  total10;
console.log("Your total marks = ", total11);
let total12 = prompt("Enter the total credits for this sem = ");
let total13 = total11 / total12;
console.log("Yours " + sem + "th SGPA is = " + total13.toFixed(2));
