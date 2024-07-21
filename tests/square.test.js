const Square = require('../lib/Square')


describe('Tests', () => {
    it('Should return an expected instance of triangle', () => {
      const expected = `<rect x="70" y="20" width="160" height="160" fill="black" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">www</text>`.trim().replace(/\s+/g, ' ');
  
      const square = new Square ('www', 'white', 'black');
      const actual = square.render().trim().replace(/\s+/g, ' ');
  
 
      expect(actual).toEqual(expected);
    });
  });