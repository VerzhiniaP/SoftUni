function sortByTwo(arr) {
   
 arr.sort((a, b) =>
a.length - b.length || a.localeCompare(b))

     console.log(arr.join('\n'))

 }
   
sortByTwo(['Deny', 'omen', 'test', 'default'])