const Triangle= require('../lib/Triangle')



describe('Tests', () => {
    it('Should return an expected instance of triangle', () => {
      const expected = `
        <polygon points="150,10 280,190 20,190" fill="black" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">www</text>
      `.trim().replace(/\s+/g, ' ');
  
      const triangle = new Triangle('www', 'white', 'black');
      const actual = triangle.render().trim().replace(/\s+/g, ' ');
  
 
      expect(actual).toEqual(expected);
    });
  });
  