/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforma arquivos TypeScript
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Arquivo opcional para configurações adicionais
};
