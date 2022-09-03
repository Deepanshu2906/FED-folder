// find factorial of a num  using Recursion

            //     steps
            // 1.  call the method from its own body
            // 2. base condition => where  recursion stops
            // 3. changing the parameter => increment / decrement

function findFactorial(n) {

    if (n == 1 || n == 0) return 1;

    if (n > 1) {
        return n * findFactorial(n - 1);
    }
}
console.log(findFactorial(7));