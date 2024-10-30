export default {
  preset: 'ts-jest', // Use ts-jest for transpiling TypeScript
  testEnvironment: 'jsdom', // Set the testing environment to jsdom for DOM testing

  // Specify file extensions Jest should process
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // Regex pattern to detect test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Transform to use ts-jest for .ts and .tsx files
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json', // Path to your tsconfig file
      },
    ],
  },

  // Module name mapping for CSS and style files
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Setup file to configure testing environment
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  // Collect coverage information
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Include TypeScript files for coverage
    '!src/**/*.d.ts', // Exclude type declaration files
  ],

  // Directory and formats for coverage reports
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text'],
};
