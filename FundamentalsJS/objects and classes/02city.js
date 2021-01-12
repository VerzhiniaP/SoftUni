function city(object){
   
    let arr = Object.entries(object)
    
    for(let [property, value] of arr){
       console.log(`${property} -> ${value}`)
    }
    
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)