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