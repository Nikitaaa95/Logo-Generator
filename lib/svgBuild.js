function createLogo(title, shapeOptions = {}) {
    const { shape, fill, text, textColor } = shapeOptions;
    let shapeEl = '';

    switch (shape) {
        case 'circle':
            shapeEl = new Circle();
            break;
        case 'triangle':
            shapeEl = new Triangle();
            break;
        case 'square':
            shapeEl = new Square();
            break;
        default:
            throw new Error('Invalid shape');
    }

    shapeEl.setFillColor(fill);
    shapeEl.setText(text);
    shapeEl.setTextColor(textColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeEl.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

module.exports = { createLogo };
