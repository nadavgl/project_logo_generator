class Square {
    constructor(characters, textColor, shapeColor){
        this.characters = characters
        this.textColor = textColor,
        this.shapeColor = shapeColor

    }
    render() {
        return `
          <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
      }
}

module.exports = Square