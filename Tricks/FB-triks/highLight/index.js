function highlight(strings, ...values) {
  return strings.reduce((initialStr, currentValue, index) => {
    if (!values[index]) return initialStr;
    initialStr += `${currentValue} <strong>${values[index]}</strong>`;
    return initialStr;
  }, "");
}

const me = {
  firstName: "Joe",
  lastName: "Doe"
};

const highlighted = highlight`
  My firstname is ${me.firstName}
  My lastname is ${me.lastName}
`;

console.log(highlighted);
// My firstname is  <strong>Joe</strong>
// My lastname is  <strong>Doe</strong>
