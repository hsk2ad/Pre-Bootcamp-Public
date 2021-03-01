var testArr = [6,3,5,1,2,4];
var total = 0;
for(var i = 0; i < testArr.length; i++){
    total = total + i;
    console.log("Num: " + testArr[i] + ", Sum: " + total);
}

for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);