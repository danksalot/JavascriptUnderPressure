// Problem 1
return 2*i

// Problem 2
return !(i&1)

// Problem 3
return i.split('.')[1] || false

// Problem 4
return i.reduce(function (l,x) { return typeof x == 'string' && x.length > l.length? x : l }, "")

// Problem 5
return i.map(function (x) { return x instanceof Array ? arraySum(x) : typeof x == 'number'? x : 0 }).reduce(function (x,y) {return x+y})
