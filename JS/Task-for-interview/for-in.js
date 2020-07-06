var myBrowser = new Object();
myBrowser.name = "Microsoft Internet Explorer";
myBrowser["version"] = "9.0";
for (var a in myBrowser) {
  console.log(a); // Перебирает свойства объекта myBrowser. Выдаст name, version
  console.log(myBrowser[a]); // Выдаст значения свойств
}

// or

for (let i in myBrowser) {
  console.log(`Object myBrowser has property ${myBrowser[i]} with key = ${i}`);
}
