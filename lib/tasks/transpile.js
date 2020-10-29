/* eslint-disable @typescript-eslint/no-var-requires */

const transpiler = require("../processors/transpile");

/**
 * Transpiles ES6 code into ES5 code.
 * This is a custom UI5 build task.
 *
 * @param {Object} parameters Parameters
 * @returns {Promise<undefined>} Promise resolving with undefined once data has been written
 */
module.exports = async function ({ workspace }) {
  let resources = await workspace.byGlob("/**/*.{js,ts}");
  await Promise.all(
    resources.map(async function (resource) {
      let transpiledResource = await transpiler(resource);

      if (transpiledResource.getPath().endsWith(".ts")) {
        transpiledResource.setPath(transpiledResource.getPath().replace(".ts", ".js"));
      }

      return workspace.write(transpiledResource);
    })
  );
};
