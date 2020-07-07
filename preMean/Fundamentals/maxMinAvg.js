function maxMinAvg(arr) {
    max = arr[0]
    min = arr[0]
    total=0
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        total+=arr[i];
        avg=total/arr.length;
    }
    return `The max is ${max}, the min is ${min}, the average is ${avg}.`
}

console.log(maxMinAvg([1, -2, 9, 4]))