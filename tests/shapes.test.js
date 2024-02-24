const { Shape, Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        it('should render a circle SVG element with the correct fill color', () => {
            const circle = new Circle();
            circle.setFillColor('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    describe('Triangle', () => {
        it('should render a triangle SVG element with the correct fill color', () => {
            const triangle = new Triangle();
            triangle.setFillColor('red');
            expect(triangle.render()).toEqual('<polygon points="150,20 230,180 70,180" fill="red" />');
        });
    });

    describe('Square', () => {
        it('should render a square SVG element with the correct fill color', () => {
            const square = new Square();
            square.setFillColor('green');
            expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
        });
    });
});
