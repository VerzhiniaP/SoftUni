function isValid(arr,index){
    if(index < 0 || index >= arr.length){
        return false
    }else{
        return true
    }
}

let myArr = [1, 2, 3, 4, 5, -6, 8, -1]

console.log(isValid(myArr, 3))
