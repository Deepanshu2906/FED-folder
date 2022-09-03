// dice if sum =8 =>
// possiblepairs  =>(2,6),(6,2),(3,5),(5,3),(4,4); = total 5
let sum=9;
let p=0;

// human approach
for(i=1;i<=6;i++){
    if((sum-i)<=6 && (sum-i)>0){
        p++;
    }
}
console.log(p);