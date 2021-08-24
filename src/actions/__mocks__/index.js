module.exports = {
    ...jest.requireActual(".."),
    __esModule: true,
    //TODO: update return value for Redux
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
  };