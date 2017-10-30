'use strict';

function binarySearchRecursive(arr, low, hi, key){
    if(hi<=low) return -1;

    var mid = low + parseInt((hi - low) /2);
    var midValue = arr[mid];
    console.log( hi , low, mid, midValue , key);
    if(midValue < key)
        return binarySearchRecursive(arr, mid + 1 , hi , key);
    else if(midValue > key)
        return binarySearchRecursive(arr, low , mid , key);
    else 
        return mid;
}


var searchArray = [1,2,3,4,5,6,7,8,9];

console.log(binarySearchRecursive(searchArray,0, searchArray.length,3 ));