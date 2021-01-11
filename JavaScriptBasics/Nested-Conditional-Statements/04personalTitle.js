function title(age, gender) {
    age = Number(age);
   
    

    if (age >= 16) {
        if (gender=== "m"){
            console.log("Mr.")
        } else {
            console.log ("Ms.")
        }

    } else  {
        if (gender === "m"){
            console.log ("Master");
        }else {
            console.log("Miss");
        }
        
    }

}

title("12", "f")