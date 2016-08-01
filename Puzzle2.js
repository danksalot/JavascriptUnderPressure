function isNumberEven(i) {
    
    // i will be an integer. Return true if it's even, and false if it isn't.
    
    return !(i&1)
    
}

/*

Unit Tests:
isNumberEven(2); // true
isNumberEven(3); // false
isNumberEven(0); // true
isNumberEven(-2); // true
isNumberEven(Math.floor(Math.random()*1000000)*2); // true

*/
