// Problem 1
return 2*i

// Problem 2
return !(i&1)

// Problem 3
return i.split('.')[1] || false

// Problem 4
return i.reduce((l,c) => typeof c == 'string' && c.length > l.length ? c : l, "")
// Shorter:
return i.reduce((l,c)=>typeof c=='string'&&c.length>l.length?c:l,"")

// Problem 5
return i.map((x) => x instanceof Array ? arraySum(x) : typeof x == 'number' ? x : 0).reduce((x,y) => x + y)
// Shorter:
return i.map((x)=>x instanceof Array?arraySum(x):typeof x=='number'?x:0).reduce((x,y)=>x+y)
