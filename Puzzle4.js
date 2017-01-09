function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
    
    // Reduce to a single string by checking all string elements against a running 'longest' string and keeping the longer of the two
    // Pass in an empty string as a parameter to Reduce to use as a starting 'longest' string
       
    return i.reduce((longest, current) => typeof current == 'string' && current.length > longest.length ? current : longest, "")
    
}

/*

Unit Tests:
longestString(['a','ab','abc']);                              // abc
longestString(['big',[0,1,2,3,4],'tiny']);                    // tiny
longestString(['Hi','World','你好']);                         // world
longestString([true,false,'lol']);                            // lol
longestString([{object: true,mainly: 'to confuse you'},'x']); // x

*/
