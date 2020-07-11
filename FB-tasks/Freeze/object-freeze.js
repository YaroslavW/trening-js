const pageInfo = {
  name: "JS",
  website: "http://js.com",
  likes: 3342345,
  followers: 3451299753,
};
Object.freeze(pageInfo);
pageInfo.name = "React";
console.log(pageInfo.name);
//JS
