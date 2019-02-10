// ==>Looping through an Object Properties
var person = { fname: "Yaroslav", lname: "Kolesnikov", age: 48 };
for (var x in person) {
    console.log(x + ": " + person[x])
}
// fname: Yaroslav
// lname: Kolesnikov
// age: 48

// ==>Looping through JSON
var json = {
    jsonData: {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
    }
    };
    for (var key in json.jsonData) {
        for (var key1 in json.jsonData[key]) {
            console.log(json.jsonData[key][key1])
        }
    }

// 11
// 12
// 13
// 14
// 15
// 21
// 22
// 23
// 31
// 32


var json1 = {
    jsonData: [{
    one: [11, 12, 13, 14, 15]
    }, {
    two: [21, 22, 23]
    }, {
    three: [31, 32]
    }]
    };
    for (var i = 0; i < json1.jsonData.length; i++) {
        for (var key in json1.jsonData[i]) {
            for (var j = 0; j < json1.jsonData[i][key].length; j++) {
                console.log(json1.jsonData[i][key][j])
            }
        }
    }

    // 11
    // 12
    // 13
    // 14
    // 15
    // 21
    // 22
    // 23
    // 31
    // 32