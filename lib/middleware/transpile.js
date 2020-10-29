/* eslint-disable @typescript-eslint/no-var-requires */
/* Based on https://github.com/petermuessig/ui5-ecosystem-showcase/tree/master/packages/ui5-middleware-livetranspile */
const ts = require("typescript");
const settings = require("../../tsconfig.json");
const parseurl = require("parseurl");

let fileNotFoundError = new Error("file not found!");
fileNotFoundError.code = 404;
fileNotFoundError.file = "";

module.exports = function ({ resources, options }) {
  return (req, res, next) => {
    if (
      req.path &&
      (req.path.endsWith(".js") || req.path.endsWith(".ts")) &&
      !req.path.includes("resources/") &&
      !((options.configuration && options.configuration.excludePatterns) || []).some((pattern) =>
        req.path.includes(pattern)
      )
    ) {
      const pathname = parseurl(req).pathname;

      // grab the file via @ui5/fs.AbstractReader API
      return resources.rootProject
        .byPath(pathname)
        .then((resource) => {
          if (!resource) {
            var stsPath = pathname.replace(".js", ".ts");
            return resources.rootProject.byPath(stsPath).then((tsresource) => {
              if (!tsresource) {
                fileNotFoundError.file = pathname;
                throw fileNotFoundError;
              } else {
                return tsresource.getString();
              }
            });
          } else {
            return resource.getString();
          }
        })
        .then((source) => {
          return ts.transpileModule(source, settings).outputText;
        })
        .then((result) => {
          res.type(".js");
          res.end(result);
        })
        .catch((err) => {
          if (err.code === 404) {
            console.warn(`...file not found: ${err.file}!`);
          } else {
            console.error(err);
          }
          next();
        });
    } else {
      next();
    }
  };
};
