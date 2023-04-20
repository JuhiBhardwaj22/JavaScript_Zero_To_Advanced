//JavaScript Object

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

const jsonData = JSON.stringify(student);

console.log("Convert Object into JSON ->", jsonData);

/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

//Json.parse
//json data
const json =
  '{"result":true, "count":42,"name": "John","age": 30,"isAdmin": false}';
const objectData = JSON.parse(json);

console.log("Convert JSON into Object ->", objectData);
