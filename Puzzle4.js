function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
       
    return i.reduce((l,c) => typeof c == 'string' && c.length > l.length ? c : l, "")
    
}

/*

Unit Tests:
longestString(['a','ab','abc']);                              // abc
longestString(['big',[0,1,2,3,4],'tiny']);                    // tiny
longestString(['Hi','World','你好']);                         // world
longestString([true,false,'lol']);                            // lol
longestString([{object: true,mainly: 'to confuse you'},'x']); // x

*/
