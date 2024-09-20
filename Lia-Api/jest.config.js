module.exports = {
    testEnvironment: "node",
    roots: ["./tests"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js", "json"],
};
