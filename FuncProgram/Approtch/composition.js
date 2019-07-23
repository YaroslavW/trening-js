function sortFilesByName(files) {
  return lodash.sortBy(files, "name");
}

function getPdfFiles(files) {
  return lodash.filter(files, { extension: PDF });
}

function getFileNames(files) {
  return lodash.map(files, "name");
}
// https://proglib.io/p/functional-coding/?fbclid=IwAR2rUGQ0YwZEdgXvOc00r97DEYal0roHKFmhd4qF9kkWcpiDZ6gGBVhfMzk
