import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['.next'],
  clearMocks: true,
}
export default config
