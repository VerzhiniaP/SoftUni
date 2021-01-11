function school(arg1, arg2, arg3, arg4) {

    let penCount = Number(arg1)
    let markerCount = Number(arg2)
    let cleaningLiter = Number(arg3)
    let discoutPersent = Number(arg4)


    penCount*= 5.80
    markerCount*= 7.20
    cleaningLiter *= 1.20

    let totalPrice = penCount + markerCount + cleaningLiter

    discoutPersent *= totalPrice / 100
    let result = totalPrice - discoutPersent

    console.log(result.toFixed(3))
}

school(2,3,2.5,25)