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
        // we can't call a methos outside object w/o object
        // calling another method using same object.
        // within the prototype use this keyword to calla method
        this.doLigic2();
    }

}
const ob1 = new funcitonApp();
const ob2 = new funcitonApp();
const ob3 = new funcitonApp();
ob1.countObjects();
ob1.doLogic3();