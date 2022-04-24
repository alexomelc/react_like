module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "css"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.css$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
