//approad 1 nested loops


function findMaxProfit(array){
    let maxProfit =0;
    let buyingPrice =0;
    let sellingPrice =0;
    let changeBuyingPrice =true;

    for(let i=0; i<array.length-1; i++){
        sellingPrice =array[i+1];
        if(changeBuyingPrice){

            buyingPrice = array[i];
        }
        if(sellingPrice <buyingPrice){
            // loss
            changeBuyingPrice =true;
            // continue;
            
        }else {
            let profit = sellingPrice - buyingPrice;
            if(profit >maxProfit){
                maxProfit = profit;
            }
            changeBuyingPrice =false;

        }
        
    }
    console.log(maxProfit);

}



findMaxProfit([78, 21, 67, 68, 23, 190, 43, 21, 23]);
findMaxProfit([100, 180, 260, 310, 40, 535, 695]);
findMaxProfit([100, 180, 260, 310, 40, 435, 200]);

