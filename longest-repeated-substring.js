'use strict';
/**
 * method to find longest common prefix
 * @param {*} string1 
 * @param {*} string2 
 */
function lcp(string1, string2){
    var minLength = Math.min(string1.length , string2.length);
    for(var i=0; i< minLength; i++){
        if(string1.charAt(i) !== string2.charAt(i))
            return string1.slice(0, i);
    }

    return string1.slice(0, minLength);
}

function lrs(string) {

    var stringlength =  string.length;

    var lrs = "";

    for(var i =0 ; i<stringlength ; i++) {
        for(var j=i+1; j< stringlength ; j++){
            var string1 = string.slice(i, stringlength);
            var string2 = string.slice(j, stringlength);
            var x = lcp( string1, string2);
          
            if (x.length > lrs .length) {
                console.log(x, string1, string2, i, j);
                lrs =x;
            }
           
        }
    }
    return lrs;
}


console.log(lrs("GEEKSFORGEEKS"));
console.log(lrs("ABABABA"));
console.log(lrs("abcpqrabpqpq"));
console.log(lrs("banana"));