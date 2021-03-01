function oneto255(){
    for(var i = 1; i <=255; i++){
        console.log(i);
    }
}

function even1000(){
    total = 0;
    for(var i = 2; i <=1000; i = i+2){
        total = total + i;
    }
    console.log(total);
}

function odd5000(){
    var total = 0;
    for(var i = 1; i <5000; i = i + 2){
        total = total + i;
    }
    console.log(total);
}

function iterateArray(arr){
    var i = 0;
    var total = 0;
    for( var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    console.log(total);
}

function findingMax(arr){
    var i = 0;
    var max = 0;
    arr[0] = max;
    for(i = 0; i < arr.length; i++){
        if(max < arr[i+1]){
            max = arr[i+1];
        }
        else if(max > arr[i+1]){
            max = arr[i];
        }
    }
    console.log(max);
}

function findingAverage(arr){
    var i = 0;
    var total = 0;

    for(i = 0; i < arr.length; i++){
        total += arr[i];
        var average = total/arr.length;
    }
    console.log(average);
}

function arrayodd(){
    var array = []
    var i = 0;
    for(var i = 1; i < 50; i = i + 2){
        array.push(i);
    }
    console.log(array);
}

function greaterThanY(arr, y){
    var i = 0;
    var counter = 0;
    for( var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            counter++;
        }
    }
    console.log(counter);
}

function squares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

function negatives(arr){
    var i = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

function maxminavg(arr){
    var i = 0;
    var max = 0;
    var min = 0;
    var avg = 0;
    var max = arr[0];
    var min = arr[0];
    newarray = [];
    for(i = 0; i < arr.length; i++){
        if(max < arr[i+1]){
            max = arr[i+1];
        }
        else if(max > arr[i+1]){
            max = arr[i];
        }
        if(min > arr[i+1]){
            min = arr[i+1];
        }
        else if(min < arr[i+1]){
            min = arr[i];
        }
        avg += arr[i];
        var average = avg/arr.length;
    }
    newarray.push(max);
    newarray.push(min);
    newarray.push(average);
    console.log(newarray);
}

function swapvalues(arr){
    var first = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = first;
    console.log(arr);
}

function numbertostring(arr){
    var i = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
