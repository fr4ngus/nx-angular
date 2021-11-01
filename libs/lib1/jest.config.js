module.exports = {
  displayName: 'lib1',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/libs/lib1',
  coverageReporters: ["clover", "json", "lcov", ["text", {"skipFull": true}]],
  coveragePathIgnorePatterns: [
    "node_modules",
    ".module.ts",
    ".mock.ts",
    "jest.config.js"
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
