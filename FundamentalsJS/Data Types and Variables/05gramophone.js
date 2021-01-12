function gram(arg1, arg2, arg3){
    let nameOfBand = arg1
    let nameOfAlbum = arg2
    let songName = arg3

    

   let result = arg2.length * arg1.length *( arg3.length / 2)
   result = Math.ceil(result/ 2.5)
   console.log(`The plate was rotated ${result} times.`)
}
gram("Black Sabbath", "Paranoid", "War Pigs")