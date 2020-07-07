//Bubble Sort
function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let y=0; y<arr.length-i; y++){
            // console.log('i: ' + i + ' y: ' + y)
            if(arr[y] > arr[y+1]){
                [arr[y], arr[y+1]]=[arr[y+1], arr[y]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([3,2,15,40,3,8,-5]))

//O(n)
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//O(1)
function findNth(arr, n){
    console.log(arr[n]);
}

//O(log n)
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// O(n2)
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
