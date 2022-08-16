const a = [
    { N: 5, arr: [ 50, 50, 70, 80, 100 ] },
]

console.log(a[0].arr.reduce((a,b) => a+b)/a[0].N)

