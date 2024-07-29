/** @format */
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    moduleNameMapper: {
        "^-/(.*)$": "<rootDir>/src/$1",
        "^@/(.*)$": "<rootDir>/src/server/$1",
        "^C/(.*)$": "<rootDir>/src/components/$1",
        "^M/(.*)$": "<rootDir>/src/md/$1",
        "^$/(.*)$": "<rootDir>/data/$1",
        "^T/(.*)$": "<rootDir>/__tests__/$1",
    },
    testPathIgnorePatterns: [
        "__tests__/mocks",
    ],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
};

export default config;