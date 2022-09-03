
var countOfobjects=0;
class funcitonApp{

    // whenever object is created, constructer is invoked.
    constructor(){
        countOfobjects++;


    }
    // defining methods
    countObjects(){
    console.log("Count of objects = "+countOfobjects);
    }
    doLigic2(){
        console.log("Performing logic 2.");
    }
    doLogic3(){
        console.log("performing using logic 3");
        console.log(this);
        // we can't call a method outside object w/o object
        // calling another method using same object.
        // within the prototype/obj use this keyword to call a method
        this.doLigic2();
    }

}
const ob1 = new funcitonApp();


//  ob1 belongs to function App prototype
console.log(ob1);
// where as JSON object is  just simple object having raw key-value pairs
// JSON doesn't belongs to any prototype.
console.log(ob1 instanceof funcitonApp);

// stringify => converts JS Object to JSON sTRing
const ob1JsonObject = JSON.stringify(ob1);
console.log(ob1JsonObject);

const parsedObj1 = JSON.parse(ob1JsonObject);
// parse()=> converts JSON obj to simple object
console.log(parsedObj1);
// note :now it will not be an instance of any prototype
// in typeScript


