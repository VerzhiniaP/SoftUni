function trade(town, sales) {

    
    sales = Number(sales);

    let com = 0;
    
if (town === "Sofia") {
    if (sales >= 0 && sales <= 500) {
        com = sales * 0.05
    } else if (sales > 500 && sales <= 1000) {
        com = sales * 0.07 
    } else if (sales > 1000 & sales <= 10000) {
        com = sales * 0.08
    } else if (sales > 10000) {
        com = sales * 0.12
    }
}
if (town === "Varna") {
    if (sales >= 0 && sales <= 500) {
        com = sales * 0.045
    } else if (sales > 500 && sales <= 1000) {
        com = sales * 0.075
    } else if (sales > 1000 && sales <= 10000) {
        com = sales * 0.1
    } else if (sales > 10000) {
        com = sales * 0.13
    }


}
if (town === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
        com = sales * 0.055
    } else if (sales > 500 && sales <= 1000) {
        com = sales * 0.08
    } else if(sales > 1000 && sales <= 10000) {
        com = sales * 0.12
    } else if (sales > 10000){
        com = sales * 0.145
    }
}

if (sales < 0 || town !=="Sofia" && town !=="Varna" && town !=="Plovdiv") {
    console.log("error")
} else {
    console.log(com.toFixed(2))
}
    

    } 
 trade("Sofia" , "1500")