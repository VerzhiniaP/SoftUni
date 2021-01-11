function walking(input) {
    const goal = 10000;
    let step = 0
    let index = 0
    

    while (step < goal){
        let current = input[index]
        if ( current == "Going home") {
            step += Number(input[index + 1])
            break;
        } 

        step += Number(current)
        index++
    }
    if (step >= goal) {
        console.log(`Goal reached! Good job!`)
        console.log(`${step - goal} steps over the goal!`)
    } else {
        console.log(`${goal - step} more steps to reach goal.`)
    }

}
walking([ '1000',
 '1500',
  '2000',
   '6500' ]
)