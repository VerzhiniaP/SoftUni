function aquarium(lenght, width, height, percent) {

    lenght =Number(lenght);
    width =Number(width);
    height =Number(height);
    percent =Number(percent);

    let volume = lenght * width * height;
    let fVolume = volume * 0.001;
    let fPercent = percent * 0.01;
    result = fVolume * (1 - fPercent);

    console.log(result);







}

aquarium("85",
"75",
"47",
"17")