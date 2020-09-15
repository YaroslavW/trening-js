const tagList = [
  {
    id: 1,
    title: "javascript",
  },
  {
    id: 2,
    title: "css",
  },
];

const postList = [
  {
    id: 1,
    title: "title-1",
    tag_ids: "1, 2",
  },
  {
    id: 2,
    title: "title-2",
    tag_ids: "1",
  },
];
// How to transform above data to this below
const res_1 = [
  {
    id: 1,
    title: "javascript",
    posts: [
      { id: 1, title: "title-1" },
      { id: 2, title: "title-2" },
    ],
  },
  {
    id: 1,
    title: "css",
    posts: [{ id: 1, title: "title-1" }],
  },
];

// solution

const postListWithTagsArray = postList.map((post) => ({
  ...post,
  tag_ids: tag_ids.split(",").map((tag_Id) => parseInt(tag_Id, 10)),
}));

const res = tagList.map((tag) => ({
  ...tag,
  posts: postListWithTagsArray.filter((post) => post.tag_ids.includes(tag.id)),
}));

console.log(res);
// https://www.facebook.com/codehubvlog/photos/a.174420883249081/614515789239586/?type=3&theater
