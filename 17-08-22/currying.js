//  not important
// closure hi use ho raha hai

const add =(a,b,c)=>a+b+c;
console.log(add(2,3,4));

// currying

const currying =(a)=>{
    return (b)=>{
        return (c)=>{
            return sum(a,b,c);
        }
    }
}
const result =currying(add);
console.log(result(1)(2)(3));