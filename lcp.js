// find the longest substring that appears at the begining of both strings
/**
 * longest common prefix
 * @param {*} string1 
 * @param {*} string2 
 */
function lcp(string1, string2){
    var minLength = Math.min(string1.length,string2.length);

    for(var i=0; i < minLength; i++) {
        if(string1.charAt(i) !== string2.charAt(i)) 
            return string1.slice(0, i);
        
    }
    return string1.slice(0, minLength);

}

console.log(lcp("hello" , "hello"));