function myFunc(text, callback) {
    setTimeout(function () {
        callback(text);
    }, 2000);
}

myFunc('Hello world!', console.log); // 'Hello world!'