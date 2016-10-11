const question2 = require('../questions/question2');

describe('Question 2', () => {

  it('it should concat the first and second property', () => {
    const concat = question2.concat();
    expect(concat).toBe(`${question2.first}${question2.second}`);
  });

  it('it should work for any values set for first and second', () => {
    const custom = question2;
    custom.first = 'dog';
    custom.second = 'cat';

    const concat = question2.concat();
    expect(concat).toBe('dogcat');
  });

});

