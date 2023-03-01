"use strict";
let student;
student = 1;
student = "any type";
function getStudent(anyType) {
    console.log(anyType);
}
let age = 20;
let courses = "javascript";
let course = "javascript";
let passed = false;
let failed = false;
function ifPassed(student, grade) {
    console.log(student);
}
let numbers = [1, 2, 3];
let students = ["sam", "max", "min"];
let players = [
    { name: "sam" },
    { name: "max" }
];
let user = [1, "sam"];
let userTwo = [1, "sam", false, 2];
let mySize = 2;
console.log(mySize);
function strin(name) {
    return "hello";
}
function num(name) {
    return 0;
}
function voidReturn(name) {
}
function calculateTax(income) {
    if (income < 50000)
        return income * .25;
    return income * .10;
}
function locals(name) {
    let x;
    return name;
}
function greeting(name, relationship) {
    return name + " " + (relationship || "Super");
}
console.log(greeting("sam"));
function greet(name, relationship = "sup") {
    return name + " " + relationship;
}
console.log(greet("sam"));
//# sourceMappingURL=index.js.map