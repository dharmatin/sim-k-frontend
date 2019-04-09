const path = require("path");
const manifest = require("./manifest");
const rules = require("./rules");

const entry = [
    path.join(manifest.paths.src, manifest.entries.ts)
];

const output = {
    path: manifest.paths.dist,
    filename: manifest.outputFiles.bundle
};

const resolve = {
    extensions: [".tsx", ".ts", ".js"]
}

module.exports = {
    devtool: manifest.IS_PRODUCTION ? false : "inline-source-map",
    entry,
    output,
    resolve,
    module: {
        rules
    }
}

