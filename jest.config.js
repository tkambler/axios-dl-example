module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app$': '<rootDir>/src',
    ['^app/(.*)$']: '<rootDir>/src/$1',
  },
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/"
  ]
};
