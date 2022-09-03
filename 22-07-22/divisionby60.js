// 4320 =>combination = 4444,3333,,2222,0000,4333,4322
function divisionBy60(num) {
    // taking first num whichis divisible by 60
    var numStr = num.toString();
    for (let i = 1020; i <= 9999; i += 60) {
        let found = true;
        for (let j = 0; j < 4; j++) {
            if (!numStr.includes(i.toString()[j])) {
                found = false;
                break;
            }
        }
        if (found) {
            if(i==num)
            console.log("yes divisible by 60");
        }

    }
}
divisionBy60(1111);
divisionBy60(4320);

