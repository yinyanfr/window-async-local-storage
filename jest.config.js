/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock"],
  verbose: true,
}