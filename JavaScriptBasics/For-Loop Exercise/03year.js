function year(year, randomYear){
    year = Number(year)
    randomYear=Number(randomYear)

    for(let i = year  ; i <= randomYear; i +=4) {
        console.log(i)
    }

}
year("1908", "1919")