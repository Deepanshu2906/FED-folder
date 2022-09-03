//

 // distance = time * speed

function findDistance(x,y){
    let t = y*(x+1)-5*(x+2);

    let d = ((t+y)/60)*x;
    console.log(d);


}
findDistance(4, 20);