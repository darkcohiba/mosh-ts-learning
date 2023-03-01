// Typescript types
// any
let student;
student = 1;
student = "any type"

function getStudent(anyType: any){
    //no implicient any changed to false will remove the error below anyType without the declaration
    console.log(anyType)
}

// number
let age: number = 20;

//string
let courses: string = "javascript";
let course = "javascript";

// boolean
let passed: boolean = false;
let failed = false;

function ifPassed(student: string, grade: number){
    console.log(student)
}
// arrays
let numbers: number[] = [1,2,3]
let students: string[] = ["sam", "max", "min"]
let players: object[] = [
                            {name: "sam"}
                            , 
                            {name: "max"}
                        ]

// tuples
let user: [number, string] = [1, "sam"]
// most value with two elements, can be overwhelming with more
let userTwo: [number, string, boolean, number] = [1, "sam", false, 2]

// enum

const enum sizes { Small = 2, Medium, Large}
//run tsc and look at the differences ways we are using the enums, with a const and without. How will JS understand them differently?

// enum sizes { Small = 2, Medium, Large}

let mySize: sizes = sizes.Small
console.log(mySize)

//functions
function strin(name: string): string {
    return "hello"
}

function num(name: string): number {
    return 0
}

function voidReturn(name:string){

}
//we can turn on noUnusedParameters and this will raise an exception if we dont use our parameters in a function

function calculateTax(income: number): number {
    if (income < 50_000)
        return income * .25
}