// spider monkey taking input
// 2
// 3 2 2
// 1 2
// 1 3
// 

//1 <= A <=N
//1 <= B <=N
// 1<= k <=N  given;
let numberOfTestCases = parseInt(readline());
for (let testCase = 0; testCase < numberOfTestCases; testCase++){
	
	let [n, k, q] = readline().split(' ').map(Number);
	for(let query = 0; query < q; query++){

		let [a, b] = readline().split(' ').map(Number);
		//console.log(a,b)
		if( (a <=n && a> 0) ||(b<=n && b>0) ){
			let difference = Math.abs(a-b);
		if( difference >= k){
			console.log(1);
		}else{
			console.log(0);
		}
	}
	}

}
