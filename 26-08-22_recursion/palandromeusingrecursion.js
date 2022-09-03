// easy way

function isPalandrome (str, i, j ){
    if(i==j || i>j){
        return true;
    }
    if(str[i]!=str[j]){
        return false;
    }
    return isPalandrome(str,i+1,j-1);
}
let str = "daad";   
console.log(isPalandrome(str,0, str.length-1));

// let rev ="";
// function checkPalandrome(str,length){
    
//     rev = rev + str[length];
//     if(length ==0 ){

//      if(rev == str){
//         console.log(rev,str);
//         return true ;
//        }else {
//         return false;
//        }
//  }
//     return checkPalandrome(str,length-1);
// }
// let str = "rama";
// let result=checkPalandrome(str, str.length-1);
// console.log(result);