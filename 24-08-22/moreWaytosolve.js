
let twoSum = (array, sum) => {
    let obj = {},
      results = [];

        for (let i = 0; i < array.length; i++){
            if (obj[array[i]]){
                results.push([obj[array[i]], array[i]])
            }else{
                obj[sum - array[i]] = array[i];
            }
          }
          return results;
    }
console.log(twoSum([10,20,10,20,50,60,70,30,40],50));