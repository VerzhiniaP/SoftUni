function bonus(arr){
    let countStudents = Number(arr.shift())
    let countLectures = Number(arr.shift())
    let bonus = Number(arr.shift())

    let maxBonus = 0
    let lectures = 0
    let total = 0
   
    for(let i = 0 ; i <= countStudents ; i++){
        let attend = Number(arr[i])
       total = attend / countLectures * (5 + bonus)
        if(total >= maxBonus){
        maxBonus = total
        lectures = attend
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${lectures} lectures.`);

}
bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '28', '5',
    '18'
  ]
  
  )