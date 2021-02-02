function sort(arr,string){

   let obj = {
       'asc': (a,b) => a - b,
       'dsc' : (a,b) => b - a
   }
   return arr.sort(obj[string])

}
console.log(sort([14, 7, 17, 6, 8], 'asc'))