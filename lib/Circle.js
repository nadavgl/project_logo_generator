class Circle {
    constructor(characters, textColor, shapeColor){
        this.characters = characters
        this.textColor = textColor,
        this.shapeColor = shapeColor

    }
    render() {
        return `
          <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
      }
}

module.exports = Circle

