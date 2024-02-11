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

    // separately shape issue
    // cicle = circle cx="150" cy="100" r="80"
    // triangle = polygon points="150,20 230,180 70,180"
    // square = rect x="50" y="50" width="100" height="100" 
}

module.exports = Shape;