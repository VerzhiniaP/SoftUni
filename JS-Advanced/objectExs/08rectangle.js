function rectangle(width, height,color){
    function calcArea(){
        return this.width * this.height
    }
    function colorChange(color){
        return color[0].toUpperCase() + color.slice(1)
    }
    return{
          width,
          height,
          color: colorChange(color),
          calcArea
    }

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
