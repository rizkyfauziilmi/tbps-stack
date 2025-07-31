/**
 * Normalizes a given file path by removing the trailing slash if it exists,
 * except when the path is a single root slash ("/").
 *
 * @param path - The file path to normalize.
 * @returns The normalized file path without a trailing slash, unless it is the root slash.
 */
export function normalizePath(path: string) {
  return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
}
