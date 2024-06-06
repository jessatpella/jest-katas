import Chance from 'chance';

global.chance = new Chance();
jest.spyOn(global, 'fetch').mockImplementation(jest.fn());

afterEach(() => {
    jest.resetAllMocks();
});
