const Circle = require('../lib/Circle')

describe('Tests', () => {
    it('Should return an expected instance of triangle', () => {
      const expected = `<circle cx="150" cy="100" r="80" fill="black" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">www</text>`.trim().replace(/\s+/g, ' ');
  
      const circle = new Circle ('www', 'white', 'black');
      const actual = circle.render().trim().replace(/\s+/g, ' ');
  
 
      expect(actual).toEqual(expected);
    });
  });