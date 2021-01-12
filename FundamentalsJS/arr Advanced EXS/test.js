function search(arr1,arr2){
   let count = 0;
   let el = arr2[2];
   let arr = arr1.slice(0,arr2[0]);
   arr.splice(0,arr2[1]);
   for(let i = 0;i<arr.length;i++){
 
       if(arr[i] === (el)){
           count++;
        }
   }
console.log(`Number ${el} occurs ${count} times.`)

}
search([5, 2, 3, 4, 1, 6],
   [5, 2, 3]
   
   )