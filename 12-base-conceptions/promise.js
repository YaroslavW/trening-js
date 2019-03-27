const myPromise = new Promise(function (res, rej) {

    setTimeout(function () {
        if (Math.random() < 0.9) {
            return res('Hooray!');
        }
        return rej('Oh no!');
    }, 1000);

});

myPromise.then((success)=>{
    console.log(success);
}); // Hooray!