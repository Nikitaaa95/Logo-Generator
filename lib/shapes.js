//Building Circle
class shape {
    constructor() {
        this.shape = 'circle cx="150" cy="100" r="80"';
        this.fill = 'green';
        this.text = '';
        this.textColor = 'white';
        this.textSize = 60;
    }

// triangle = polygon points="150,20 230,180 70,180"
// square = rect x="50" y="50" width="100" height="100" 

    setFillColor(color) {
      this.fill = color;
    }
  
    setText(text) {
      // Allow up to three characters for the text
      this.text = text.slice(0, 3);
    }
  
    setTextColor(color) {
      this.textColor = color;
    }
  
    //"render() {
      // Construct the SVG circle element string
      //const circleSVG = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
  
      // Construct the SVG text element string
      //const textSVG = `<text x="${this.cx}" y="${this.cy + (this.textSize / 3)}" font-size="${this.textSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  
      // Return the combined SVG string
      //return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        //${circleSVG}
        //${textSVG}
      //</svg>`;
    //}
  //}
  
  module.exports = Circle;
  