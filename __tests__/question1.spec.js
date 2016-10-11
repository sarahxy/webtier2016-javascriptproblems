const question1 = require('../questions/question1');


describe('Question 1', () => {

  it('should concat the values of object1', () => {
    const str = question1();
    expect(str).toBe("betta, greyhound, scottish fold");
  });

});

