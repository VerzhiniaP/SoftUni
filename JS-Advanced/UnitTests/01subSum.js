function sum(arr,start,end){
if(start < 0){
    start = 0
}
if(Array.isArray(arr)== false){
    return NaN
}
if(end > arr.length){
    end = arr.length
}
return arr.slice(start,end + 1).reduce((a,c)=> a + Number(c), 0)
}
console.log(sum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(sum([10, 'twenty', 30, 40], 0, 2))
console.log(sum([], 1, 2))
console.log(sum('text', 0, 2))