function fn(str) {
  const rgex = /^\d+/;
  let res = str.match(rgex);
  if (res) {
    console.log(str);
  } else {
    console.log(`Not start number + ${str}`);
  }
}

// fn('234_Nadya Savch enko- 00000dgsha7777');
// 234_Nadya Savch enko- 00000dgsha7777
fn("Nadya Savche_736272 0048 ghjs_n.jpg");
// Not start number + Nadya Savche_736272 0048 ghjs_n.jpg
