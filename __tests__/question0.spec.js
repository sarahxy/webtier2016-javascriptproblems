const question0 = require('../questions/question0');

describe('Question 0', () => {

  it('should return "Hello {first} {last}!" with correct capitalization', () => {
    const alreadyCapitalized = question0('Julia', 'Sun');
    expect(alreadyCapitalized).toBe('Hello Julia Sun!');
  });

  it('should capitalize first name when not capitalized', () => {
    const firstNotCapitalized = question0('julia', 'Sun');
    expect(firstNotCapitalized).toBe('Hello Julia Sun!');
  });

  it('should capitalize last name when not capitalized', () => {
    const secondNotCapitalized = question0('Julia', 'sun');
    expect(secondNotCapitalized).toBe('Hello Julia Sun!');
  });

  it('should capitalize both first and last when neither are capitalized', () => {
    const neitherCapitalized = question0('julia', 'sun');
    expect(neitherCapitalized).toBe('Hello Julia Sun!');
  });

  it('should use correct capitalization for random letters being capitalized', () => {
    const randomCapitalization = question0('jUlIa', 'SuN');
    expect(randomCapitalization).toBe('Hello Julia Sun!');
  });

});

