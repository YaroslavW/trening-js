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

