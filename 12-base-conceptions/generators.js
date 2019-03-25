function* greeter() {
    yield 'Hi';
    yield 'How are you?';
    yield 'Bye';
}

const greet = greeter();

console.log(greet.next().value);
// 'Hi'

console.log(greet.next().value);
// 'How are you?'

console.log(greet.next().value);
// 'Bye'

console.log(greet.next().value);
// undefined




function* idCreator() {
    let i = 0;
    while (true)
        yield i++;
}

const ids = idCreator();

console.log(ids.next().value);
// 0

console.log(ids.next().value);
// 1

console.log(ids.next().value);
// 2
// etc...