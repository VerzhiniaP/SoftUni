function catWalk (arg1, arg2, arg3){
    let walkMinutes = Number(arg1)
    let walkCount = Number(arg2)
    let catCalories = Number(arg3)


    let walkTotal = walkMinutes * walkCount
    let caloriesBurn = walkTotal * 5

    let neededPersent = catCalories * 0.50

    if(caloriesBurn >= neededPersent ) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurn}.`)
    } else if (caloriesBurn < catCalories) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurn}.`)
    }


}
catWalk(30,3,600)