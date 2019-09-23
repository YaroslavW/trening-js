function drowStars(n) {
  let rows = n * 2 - 1;
  for (let i = 1; i <= rows; i++) {
    let num = i <= n ? i : n * 2 - i;
    // console.log(num); // 1-2-3-4-3-2-1
    let starRow = "";
    for (let j = 1; j <= num; j++) {
      let hashStar = j % 2 === i % 2;
      starRow += hashStar ? "* " : "  ";
    }
    console.log(starRow);
  }
}
drowStars(10);
