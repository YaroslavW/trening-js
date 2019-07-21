function sortFilesByName(files) {
  return lodash.sortBy(files, "name");
}

function getPdfFiles(files) {
  return lodash.filter(files, { extension: PDF });
}

function getFileNames(files) {
  return lodash.map(files, "name");
}
