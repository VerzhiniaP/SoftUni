function car(input){
    function getEngine(power){
        let engineType = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        for(let i = 0 ; i < engineType.length ; i++){
            if(engineType[i].power >= power){
                return engineType[i]
            }
        }
    }
    function getCarriage(carriage,color){
        return {
            type: carriage,
            color
        }
    }
    function getWheels(wheelsize){
        let wheels = Math.floor(wheelsize) % 2 == 0 
        ? Math.floor(wheelsize) - 1 
        : Math.floor(wheelsize)
        return [wheels,wheels,wheels,wheels]
    }
return{
    model: input.model,
    engine: getEngine(input.power),
    carriage: getCarriage(input.carriage,input.color),
    wheels: getWheels(input.wheelsize)
}
}
console.log(car({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log(car({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));