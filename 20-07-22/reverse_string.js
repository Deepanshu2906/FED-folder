//

let str ="MUmbai";
//console.log(str[str.length-1]);

function reverseString(str){
    let revStr="";
    let len =str.length;
    for(let i=(len-1);i>=0;i--){
        revStr+= str[i];
    }
    console.log("here idsthe reverse = "+revStr);
}
reverseString("Deepanshu");

