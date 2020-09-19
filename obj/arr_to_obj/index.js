const list = [
  { label: "JavaScript", color: "blue" },
  { label: "html", color: "red" },
  { label: "css", color: "green" },
];

const initialValue = {};

const convertToObj = (result, item) => {
  const language = item.label;
  const color = item.color;

  return {
    ...result,
    [language]: color,
  };
};

const palette = list.reduce(convertToObj, initialValue);

console.log(palette);
// { JavaScript: 'blue', html: 'red', css: 'green' }
