// Lastly, you may have used JSON.stringify before,
//  but did you realise it can also help indent your JSON for you?

// The stringify() method takes two optional parameters: a replacerfunction,
//  which you can use to filter the JSON that is displayed, and a spacevalue.

// The space value takes an integer for the number of spaces you want or
//  a string (such as '\t' to insert tabs), and it can make it a lot easier to
//   read fetched JSON data.

console.log(JSON.stringify({ alpha: "A", beta: "B" }, null, "\t"));
// Result:
// '{
// "alpha": A,
// "beta": B
// }'
