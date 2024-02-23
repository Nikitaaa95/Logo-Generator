class Shape {
    constructor() {
        this.fill = 'green';
        this.text = 'SVG';
        this.textColor = 'white';
        this.textSize = 60;
    }

    setFillColor(color) {
        this.fill = color;
    }

    setText(text) {
        this.text = text.slice(0, 3);
    }

    setTextColor(color) {
        this.textColor = color;
    }

    render() {
        return '';
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.fill}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.fill}" />`;
    }
}

module.exports = { Shape, Circle, Triangle, Square };
