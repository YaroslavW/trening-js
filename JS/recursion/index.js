function degree(chislo, stepen) {
  if (stepen) {
    return chislo * degree(chislo, stepen - 1);
  }
  return 1;
}
console.log(degree(2, 3));
// 8