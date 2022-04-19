const nextJest = require('next/jest');

const createJestConfig = nextJest();

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);