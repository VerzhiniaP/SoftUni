class Rectangle{
    constructor(width,height,color){
        this.width = width
        this.height = height
        function colorUpper(color){
            let first = color[0].toUpperCase()
            let last = color.slice(1)
            return first + last
        }
        this.color = colorUpper(color)
    }

    calcArea(){
        return Number(this.width * this.height)
    }
}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
