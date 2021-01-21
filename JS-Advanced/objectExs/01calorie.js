function calorie(arr){

    let obj = {}
  for(let i = 0 ; i < arr.length ; i++){
      obj[arr[i]] = Number(arr[i+1])
      i++
  }
  console.log(obj);
}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])