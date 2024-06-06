/*
;

'fizzbuzz' if the number is divisible by both 3 and 5.
'{number}' if the number doesn't fulfil any of the above conditions.
 */
import {fizzBuzz} from "../src";

describe('1. fizzBuzz', () => {
  it('shows \'fizz\' if the number is divisible by 3', () => {
    const resultNumber = fizzBuzz(3);
    expect(resultNumber).toBe("fizz");

    const resultString = fizzBuzz("12");
    expect(resultString).toBe("fizz");
  });
  it('shows \'fizz\' if the number is divisible by 5', () => {
    const resultNumber = fizzBuzz(5);
    expect(resultNumber).toBe("buzz");

    const resultString = fizzBuzz("25");
    expect(resultString).toBe("buzz");
  });
  it('shows the number when not divisible by 5 or 3', () => {
    let input = 7;
    const noFizzResult = fizzBuzz(input);
    expect(noFizzResult).toBe(input);
  });
  it('shows \'fizzbuzz\' if the number is divisible by both 3 and 5', () => {
      const fizzBuzzResult = fizzBuzz(15);
      expect(fizzBuzzResult).toBe("fizzbuzz");
  });
  it('throws error when non-numeric value is discovered', () => {
      const fizzBuzzResult = fizzBuzz("potato");
      expect(fizzBuzzResult).toBe("Invalid input");
  });
});

describe('2. mapWithCb', () => {
  it('throws an error if first argument is not an array', () => {

  });

  it('throws an error if second argument is not a function', () => {

  });

  it('calls the given function at least once', () => {

  });

  it('calls the given function a number of times equal to the length of the given array', () => {

  });

  it('calls the given function with any one item from the given array', () => {

  });

  it('calls the given function a second time with the second item in the given array', () => {

  });

  it('calls the given function a final time with the final item in the given array', () => {

  });
})

describe('3. getPokemon', () => {

});
