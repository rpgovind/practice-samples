function quickSort(elements) {
    if (elements.length <= 1) return elements;

    var lesser = [],
        larger = [];
    const pivotPosition = Math.ceil(Math.random() * elements.length) - 1;


    for (let i = 0; i < elements.length; i++) {
        if (i == pivotPosition) continue;
        if (elements[i] < elements[pivotPosition]) {
            lesser.push(elements[i]);
        } else {
            larger.push(elements[i]);
        }
    }

    let mergedResult = quickSort(lesser);
    mergedResult.push(elements[pivotPosition]);
    mergedResult = mergedResult.concat(quickSort(larger));
    return mergedResult;
}


//random data for test

let testElements = [];
const numElemnts = 20;
for (let i = 0; i < numElemnts; i++) {
    testElements.push(Math.floor(Math.random() * numElemnts));
}

console.log('Array elements before quick sort');
console.dir(testElements);
let result = quickSort(testElements);

console.log('Array elements after quick sort');
console.dir(result);
