const question3 = require('../questions/question3');


describe('Question 3', () => {

  it('should return an object with keys as elements and index as values', () => {
    expect(question3(['dog', 'cat'])).toEqual({
      dog: 0,
      cat: 1
    });
  });

  it('should return the object with longer arrays', () => {
    expect(question3(['dog', 'cat', 'cow', 'bunny', 'apple'])).toEqual({
      dog: 0,
      cat: 1,
      cow: 2,
      bunny: 3,
      apple: 4
    });
  });

  it('should still work with different types', () => {
    expect(question3(['dog', 1, 2, 'kitty'])).toEqual({
      dog: 0,
      1: 1,
      2: 2,
      kitty: 3
    });
  });
});

