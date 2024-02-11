function createLogo(title, shapeOptions = {}) {
    const { shape, fill, text, textColor } = shapeOptions;
    // Use Shape class methods to generate SVG
    const shapeSVG = new Shape();
    shapeSVG.setFillColor(fill);
    shapeSVG.setText(text);
    shapeSVG.setTextColor(textColor);
    // Generate SVG based on selected shape
    const shapeEl = ""/* Generate shape element using shapeOptions */;
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeEl}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

module.exports = { createLogo };