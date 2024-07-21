
class Triangle {
    constructor(characters, textColor, shapeColor){
        this.characters = characters
        this.textColor = textColor,
        this.shapeColor = shapeColor

    }
    render() {
        return `
          <polygon points="150,10 280,190 20,190" fill="${this.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
      }
}

module.exports = Triangle