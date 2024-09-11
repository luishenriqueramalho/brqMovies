module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(expo-modules-core|expo|react-native|@react-native|@expo)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
