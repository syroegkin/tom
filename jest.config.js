const TEST_REGEX = 'tests/.*spec\\.ts$';

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx',
  ],
  collectCoverage: true,
};
