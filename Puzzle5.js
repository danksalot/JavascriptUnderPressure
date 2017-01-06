function arraySum(i) {
    
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    
    return i.map((x) => x instanceof Array ? arraySum(x) : typeof x == 'number' ? x : 0).reduce((x,y) => x + y)
    
}

/*

Unit Tests:
arraySum([1,2,3,4,5]);                          // 15
arraySum([[1,2,3],4,5]);                        // 15
arraySum([[1,2,false],'4','5']);                // 3
arraySum([[[[[[[[[1]]]]]]]], 1]);               // 2
arraySum([['A', 'B', 'C', 'easy as',1,2,3]]);   // 6

*/
