const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
      tsconfig: './tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true
};
