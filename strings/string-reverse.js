//many ways to reverse a string

function reverseString1(str) {
    if (!str) return;
    return str.split('')
        .reverse()
        .join('');
}


//second methood using for ..of loop
function reverseString2(str) {
    let newstr = '';
    for(let char of str){
        newstr = char + newstr;
    }
    return newstr;
}


//thirdway using decremnting array

function reverseString3(str) {
    let index = str.length -1;
    let newstr ='';
    while(index >= 0) {
        newstr  = newstr + str[index];
        index --;
    }
    return newstr;
}


//fourth way using recursion
function reverseString4(str) {
    if(str === '') return '';
    return reverseString4(str.slice(1)) + str.charAt(0);
}


function reverseString5(str) {
    return str.split('').reduce((
        accumulator,
        currentValue,
        currentIndex,
        array
    ) => {
        return currentValue + accumulator;
    }, '')
}
console.log(reverseString1('Hello World'));
console.log(reverseString2('Hello World'));
console.log(reverseString3('Hello World'));
console.log(reverseString4('Hello World'));
console.log(reverseString5('Hello World'));