// print the start pattern

function starPattern(row){

    let stars="";
    for(let i=1;i<=row;i++){
        // loop for space  for n=5 space willl star from 4
        for(let j=1; j<=row - i; j++)
        {
            stars +=" ";
        }
        for(let k=1;k<=2*i-1;k++)
        {
            stars +="*";
        }
        stars +="\n"; 
    }
    console.log(stars);
}
starPattern(5);