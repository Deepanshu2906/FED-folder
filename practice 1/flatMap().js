const numbers = [1, 4,6,7,0,2,10];
const trippled = numbers.flatMap(number => {
  return [number, 2 * number, 3 * number];
});
console.log(trippled);


const filterOddandSquare = numbers.flatMap(number => {
    return number %2 ==0 ?[] :[number*number] ;
  });

console.log(filterOddandSquare)  ;
