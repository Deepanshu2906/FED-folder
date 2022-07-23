// switch => t help decision making based on matching value.

function printResults(grade){

    switch (grade) {
        case 'A+':{
            console.log("Distinction");
            break;
        }
        case 'A':{
            console.log("Firdt class");
            break;
        }
        case 'B':{
            console.log("Second Class");
            break;
        }
        case 'C':{
            console.log("Fail");
            break;
        }
    
        default:{
            console.log("Invalid Grade");
        }
        
    }
    console.log("Out of Switch");
}

printResults('B');
printResults('f');
