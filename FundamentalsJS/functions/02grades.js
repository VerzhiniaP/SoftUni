function grades(grade){

    let arr =['Fail', 'Poor', 'Good', 'Very good', 'Excellent']
    if(grade < 3){
       console.log(`${arr[0]} (${grade.toFixed(2)})`)
    }else if(grade >= 3.00 && grade < 3.50){
        console.log(`${arr[1]} (${grade.toFixed(2)})`)
    }else if(grade >= 3.50 && grade < 4.50){
        console.log(`${arr[2]} (${grade.toFixed(2)})`)
    }else if(grade >= 4.50 && grade < 5.50){
        console.log(`${arr[3]} (${grade.toFixed(2)})`)
    }else if(grade >= 5.50){
        console.log(`${arr[4]} (${grade.toFixed(2)})`)
    }

}
grades(2.99)