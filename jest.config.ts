import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'node',
  testTimeout: 5000,
}

export default config
