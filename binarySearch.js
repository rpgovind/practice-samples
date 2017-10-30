'use strict';

function binarySearch(sortedArray, item) {
    var hi = sortedArray.length;
    var low = 0;
    var numofGuessses = 0;
    while (low <= hi) {
        var mid = parseInt((low + hi) / 2);
        numofGuessses++;
        if (sortedArray[mid] === item) 
        return {
            index: mid,
            searchValue: item,
            numofGuessses
        };
        if (sortedArray[mid] > item) hi = mid-1;
        else
            low = mid + 1;
        
    }
    return  -1;
}

var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(my_list, 1));