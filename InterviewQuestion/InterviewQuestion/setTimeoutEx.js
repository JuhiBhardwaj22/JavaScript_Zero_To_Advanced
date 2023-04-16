const playList = [
  { songName: "Test1", duration: 1000 },
  { songName: "Test2", duration: 2000 },
  { songName: "Test3", duration: 3000 },
  { songName: "Test4", duration: 4000 },
  { songName: "Test5", duration: 5000 },
];

function displayList(list) {
  list.map((item) => {
    setTimeout(() => {
      if (item.duration) {
        console.log("Song Name :-", item.songName);
      }
    }, item.duration);
  });
}

displayList(playList);
