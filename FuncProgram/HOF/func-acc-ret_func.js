const killSiblingMemoized = lodash.memoize(killSibling);

const getSortedPDFFileNames = lodash.flow(
  getPdfFiles,
  getFileNames,
  lodash.sortBy
);
