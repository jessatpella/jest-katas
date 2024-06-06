/*
;

'fizzbuzz' if the number is divisible by both 3 and 5.
'{number}' if the number doesn't fulfil any of the above conditions.
 */
import {fizzBuzz} from "../src";

describe('1. fizzBuzz', () => {
  it('shows \'fizz\' if the number is divisible by 3', () => {
    const fizzResult = fizzBuzz(3);
    expect(fizzResult).toBe("fizz");

    const noFizzResult = fizzBuzz(6);
    expect(noFizzResult).toBeUndefined();
  });
  it('shows \'fizz\' if the number is divisible by 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe("buzz");
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
