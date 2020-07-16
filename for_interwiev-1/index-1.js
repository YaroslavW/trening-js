function Browser(name, version) {
  this.name = name;
  this.version = version;
  this.aboutBrowser = function () {
    console.log("Обозреватель: " + name + " " + version);
  };
}
var myBrowser = new Browser("Microsoft Internet Explorer", 8.0);
myBrowser.aboutBrowser();
// Обозреватель: Microsoft Internet Explorer 8
