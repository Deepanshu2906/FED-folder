

function reversePyramid(row){
    for(let i=1; i <=row ; i++){
        let flag ="";
        for(let j=1; j<i; j++){
            flag +=" ";
        }
        for(let k =i; k<=row; k++){
            flag += k  +" ";
        }
        console.log(flag);
    }
}
reversePyramid(9);