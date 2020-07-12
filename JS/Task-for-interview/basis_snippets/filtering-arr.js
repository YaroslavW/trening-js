let data = [
  "files/dir1/file",
  "files/dir1/file2",
  "files/dir2/file",
  "files/dir2/file2",
];

let filterData = data.filter((path) => path.includes("dir2"));

console.log(filterData);
// [ 'files/dir2/file', 'files/dir2/file2' ]
