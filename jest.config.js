const baseConfig = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testing/test-utils/mocks/mock-file.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/*'],
  // globalSetup: '<rootDir>/testing/jest-configuration/jest-global-setup.ts',
  testMatch: [
    '<rootDir>/src/**/?(*.)+(spec|test).[jt]s',
    '<rootDir>/utils/**/?(*.)+(spec|test).[jt]s',
  ],
}

module.exports = {
  projects: [baseConfig],
  coverageReporters: ['html', 'text'],
  maxWorkers: '25%',
}
