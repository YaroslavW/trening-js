Promise.resolve()
  .then(
    function success(res) {
      throw new Error("Error after success");
    },
    function fail1(e) {
      console.error("fail1: ", e);
    }
  )
  .catch(function fail2(e) {
    console.error("fail2: ", e);
  });

//   fail2:  Error: Error after success
//     at success (<anonymous>:4:13)

// .then can accept two parameters, the first is a function that handles success, and the second is a function that handles errors. .catch is a convenient way to write the second parameter of .then, but there is one thing to pay attention to in usage: .then the second error-handling function cannot catch the error thrown by the first successful function and subsequent ones. catch catches previous errors. Of course, the following code works if you want to rewrite:

Promise.resolve()
  .then(
    function success1(res) {
      throw new Error("success1 error");
    },
    function fail1(e) {
      console.error("fail1: ", e);
    }
  )
  .then(
    function success2(res) {},
    function fail2(e) {
      console.error("fail2: ", e);
    }
  );
