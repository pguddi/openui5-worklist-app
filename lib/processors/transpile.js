/* eslint-disable @typescript-eslint/no-var-requires */
const ts = require("typescript");
const settings = require("../../tsconfig.json");

module.exports = function (resource) {
  return resource.getString().then(function (code) {
    var sResult = ts.transpileModule(code, settings);
    resource.setString(sResult.outputText);
    return Promise.resolve(resource);
  });
};
