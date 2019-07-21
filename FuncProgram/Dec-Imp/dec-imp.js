// Декларативный код описывает, что он делает:
function ReactComponent({ counter }) {
  return <span>{counter}</span>;
}

// Императивный код описывает, как он это делает:
function UpdateCounter({ counter }) {
  document.getElementById("counter").innerHTML(`<span>${counter}<span>`);
}
// ex
function getFileMapById(files) {
  const fileMap = {};
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    fileMap[file.id] = file;
  }
  return fileMap;
}
