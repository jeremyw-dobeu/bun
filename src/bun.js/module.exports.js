let fileURLToPath;

const pathsFunction = function paths() {
  return [];
};

export function createRequire(filename) {
  let filenameString = filename;
  const isURL =
    typeof filename === "object" && filename && filename instanceof URL;

  if (isURL) {
    fileURLToPath ||= globalThis[Symbol.for("Bun.lazy")]("fileURLToPath");
    filenameString = fileURLToPath(filename);
  }

  const pathObject = {
    path: filenameString,
    resolveSync,
  };
  const bunResolveSync = import.meta.resolveSync;
  const realRequire = import.meta.require;

  function resolveSync(id) {
    return arguments.length <= 1
      ? bunResolveSync.call(pathObject, id)
      : bunResolveSync.call(pathObject, id, arguments[1]);
  }

  const requireFunction = function require(id) {
    return realRequire.call(
      pathObject,
      bunResolveSync.call(pathObject, id, filenameString)
    );
  };

  requireFunction.resolve = function resolve(id, pathsArg) {
    if (arguments.length > 1 && pathsArg && typeof pathsArg === "object") {
      const { paths } = pathsArg;
      if (paths && Array.isArray(paths) && paths.length > 0) {
        return bunResolveSync.call(pathObject, id, paths[0]);
      }
    }

    return bunResolveSync.call(pathObject, id);
  };
  requireFunction.resolve.paths = pathsFunction;
  requireFunction.main = undefined;

  return requireFunction;
}

// this isn't exhaustive
export const builtinModules = ["node:path", "node:fs", "bun:ffi", "bun:sqlite"];

// noop
export function syncBuiltinESMExports() {}

export function findSourceMap(path) {
  throw new Error("findSourceMap is not implemented");
}

export function SourceMap() {
  throw new Error("SourceMap is not implemented");
}

export default {
  createRequire,
  syncBuiltinESMExports,
  findSourceMap,
  SourceMap,
};
