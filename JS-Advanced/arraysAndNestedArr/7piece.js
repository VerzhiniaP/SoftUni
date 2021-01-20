function piece(arr,string1,string2){
    let index1 = arr.indexOf(string1)
    let index2 = arr.indexOf(string2)
     return arr.slice(index1,index2 + 1)
    
}
console.log(piece(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

))