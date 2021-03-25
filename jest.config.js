module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/src/**/__tests__/**/*.[jt]s?(x)'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{ts,tsx}',
    '<rootDir>/src/screens/**/*.{ts,tsx}',
    '<rootDir>/src/hooks/**/*.{ts,tsx}',
    '<rootDir>/src/services/**/*.{ts,tsx}',
    '<rootDir>/src/store/**/*.{ts,tsx}',
    '<rootDir>/src/utils/**/*.{ts,tsx}'
  ]
}
