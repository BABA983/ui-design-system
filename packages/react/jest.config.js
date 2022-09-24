const config = {
  roots: ['<rootDir>/src'],
  testRegex: '(/.*\\.test)\\.(ts|tsx)$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
};

module.exports = config;
