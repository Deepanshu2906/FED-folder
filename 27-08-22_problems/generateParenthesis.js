

const result =[]; // array result
const n=3; // num of  parenthesis pair in every string 
// each and string length =n*2   
let str ="";
function generateParenthesis(str, left,right){

    // end position
    if(str.length == n*2){
        result.push(str);
        return;
    }
    if(left!==n){
        generateParenthesis(str+"(",left+1,right);
    }
    if(right < left){
        generateParenthesis(str +")", left, right+1);
    }

}

generateParenthesis(str, 0, 0);
console.log(result);