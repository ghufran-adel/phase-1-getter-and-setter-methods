// Add your Circle class here
const pi= Math.PI
class Circle {
    constructor(radius) {
    this.radius  = radius ;
    }
    get diameter(){
    return this.diameter =this.radius*2
    }
    set diameter(diameter){
    return this.radius=diameter/2
    }
    get circumference(){
    return this.circumference= pi*this.diameter
    }
    set circumference(circumference){
    const d=2*pi ;
    return this.radius=circumference/d
    }
    get area(){
    return this.area= (this.radius*this.radius) *pi
    }
    set area(area){
    return this.radius=Math.sqrt( area / pi )
    }
}
const circle = new Circle( 6 )