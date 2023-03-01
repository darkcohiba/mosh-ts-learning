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

enum sizes { Small, Medium, Large}

let mySize: sizes = sizes.Small
