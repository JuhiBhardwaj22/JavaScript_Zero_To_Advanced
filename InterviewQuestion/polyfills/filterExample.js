const logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 2,
  },
  { name: "The Incredible True Story", rating: 4 },
  {
    name: "Supermarket",
    rating: 9,
  },
  {
    name: "Neon",
    rating: 8,
  },
  { name: "Under Pressure", rating: 5 },
];

function getFilteredAlbums(x) {
  return x.rating > 4;
}

let getAlbums = logicAlbums.filter(getFilteredAlbums);
console.log("getAlbums", getAlbums);

//Polyfill for Filter method

Array.prototype.myFilter = function (callBackFunction) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFunction(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
let getMyFilteredArray = logicAlbums.myFilter(getFilteredAlbums);
console.log("getMyFilteredArray", getMyFilteredArray);
