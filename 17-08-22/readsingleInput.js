// need help of a prebuilt library -> readlines
// how to use such a prebuilt library?
    // To use library, you need to import it in our program.
    // how to import a library.

// 1. Importing a library to read input from terminal
  let readline= require("readline") ; 

  // 2. create an interface to read data from terminal
// process is an inbuilt object
  const options ={
        input: process.stdin,
        output :process.stdout
    };
    const rlInterface = readline.createInterface(options);

rlInterface.question("Enter a number ", (answer)=>{
    console.log(answer);
    rlInterface.close();
});

