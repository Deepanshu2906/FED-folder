// problem 4  =>   grading system

let marks;
function findGrade(marks){
    if(marks >=90){
        console.log("A");
    }
    else if(marks >=80 && marks <90){
        console.log("B");
    }
    else if(marks >=60 && marks<80){
        console.log("C");
    }
    else if(marks >32 && marks <60){
        console.log("D")
    
    }else {
        console.log("F");
    }
}
findGrade(23);
findGrade(66);
findGrade(87);
findGrade(99);