function distance(arg){

    distanceMeters = Number(arg)

    let distanceKM = distanceMeters / 1000

    console.log(distanceKM.toFixed(2))
   

}
distance(1852)