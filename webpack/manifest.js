const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEVELOPMENT = NODE_ENV === "development";
const IS_PRODUCTION = NODE_ENV === "production";

const dir = src => path.join(__dirname, src);

const paths = {
    src: dir("../src"),
    dist: dir("../dist")
}

const entries = {
    ts: "index.ts"
}

const outputFiles = {
    bundle: "bundle.js"
}

module.exports = {
    paths,
    entries,
    outputFiles,
    NODE_ENV,
    IS_DEVELOPMENT,
    IS_PRODUCTION
}