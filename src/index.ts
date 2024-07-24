interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Number((Math.PI * this.radius ** 2).toFixed(2));
    }

    calculatePerimeter(): number {
        return Number((2 * Math.PI * this.radius).toFixed(2));
    }
}

class Rectangle implements Shape {
    constructor(public length: number, public width: number) {}

    calculateArea(): number {
        return this.length * this.width;
    }

    calculatePerimeter(): number {
        return 2 * (this.length + this.width);
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); //  78.54
console.log("Circle Perimeter:", circle.calculatePerimeter()); // 31.42

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // 24
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter()); // 20