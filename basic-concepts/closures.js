function createGreeter(greeting) {
    return function (name) {
        console.log(greeting + ', ' + name);
    }
}

const sayHello = createGreeter('Hello');
console.log(sayHello('Joe')); // Hello, Joe

// ====> For Real Life - It for protection keys
function apiConnect(apiKey) {

    function get(route) {
        return fetch(`${route}?key=${apiKey}`);
    }

    function post(route, params) {
        return fetch(route, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
    }

    return { get, post }

}

const api = apiConnect('my-secret-key');
// больше нет необходимости передавать API-ключ,
// он сохранен в замыкании функции api
api.get('http://www.example.com/get-endpoint');
api.post('http://www.example.com/post-endpoint', { name: 'Joe' });