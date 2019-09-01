// Assuming the query string is ?post=1234&action=edit

var urlParams = new URLSearchParams(window.location.search);
// urlParams --> ?post=1234&action=edit

urlParams.has("post"); //true
urlParams.get("action"); // "edit"
urlParams.getAll("action"); // ["edit"]
urlParams.toString(); // "?post=1234&action=edit"
urlParams.append("active", "1"); // "?post=1234&action=edit&active=1"
