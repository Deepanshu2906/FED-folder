// print the nith term  from the fibonacci series
// 0,1,1,2,3,5,8,13,...


function find_nth_fibonacci(num) {
    if (num == 1) {
        return 0;
    } if (num == 2) {
        return 1;
    }
    let i = 2;
    let series = [0, 1];
    while (i <= num - 1) {
        let newNum = series[i - 1] + series[i - 2];
        series.push(newNum);
        i++;
    }
    console.log(series[num-1])

}

find_nth_fibonacci(6);
find_nth_fibonacci(24);
