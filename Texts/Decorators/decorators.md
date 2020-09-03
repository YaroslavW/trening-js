# Декораторы.

В этой статье описывается новое предложение, которое будет представлено TC39 на собрании в сентябре 2020 года.

## Введение

Декораторы - это предложение по расширению классов JavaScript, которое широко используется разработчиками в среде транспиляторов, проявляющих большой интерес к стандартизации. TC39 работает над предложениями декораторов более пяти лет. Этот документ описывает новое предложение для декораторов, основанное на элементах из всех прошлых предложений.

**Декораторы** `@decorator` - это функции, вызываемые в элементах класса или других формах синтаксиса JavaScript во время определения, потенциально _оборачивающие_ или _заменяющие_ их новым значением, возвращаемым декоратором.

Декорированное поле класса рассматривается как упаковка пары `геттер / сеттер` для доступа к этому хранилищу. Декорированное хранилище полезно для наблюдения / отслеживания, что было проблемой для оригинальных устаревших / экспериментальных декораторов в сочетании с семантикой [[Define]] для полей классов. Эта семантика основана на предложении Мишеля Вестстрата о [«декораторах захвата»](https://github.com/tc39/proposal-decorators/issues/299).

Декораторы также могут аннотировать элемент класса метаданными. Это простые, неограниченные свойства объекта, которые собираются от всех добавляющих их декораторов и становятся доступными в виде набора вложенных объектов в свойстве [Symbol.metadata].

Благодаря тому, что декораторы всегда просто оборачивают то, что они украшают, вместо того, чтобы выполнять другие преобразования, это предложение направлено на выполнение следующих требований:

- Класс "shape" виден без выполнения кода, что делает декораторы более оптимизированными для движков.
- Реализации могут работать полностью для отдельных файлов, без необходимости знания кросс-файлов.
- Не добавляется новое пространство имен или тип второсортного значения - декораторы - это функции.

## Примеры

Несколько примеров того, как реализовать и использовать декораторы в этом предложении:

### `@logged`

Декоратор `@logged` записывает консольное сообщение при запуске и завершении метода. Многие другие популярные декораторы также захотят обернуть функцию, например, `@deprecated`, `@debounce`, `@memoize` и т. д.

Использование:

```js
import { logged } from "./logged.mjs";

class C {
  @logged
  m(arg) {
    this.#x = arg;
  }

  @logged
  set #x(value) {}
}

new C().m(1);
// starting m with arguments 1
// starting set #x with arguments 1
// ending set #x
// ending m
```

`@logged` можно реализовать в JavaScript как декоратор. Декораторы - это функции, которые вызываются с аргументом, содержащим то, что декорируется. Например:

- Декорируемый метод вызывается декорируемым методом.
- Декорированный геттер вызывается с декорированной функцией геттера
- Декорированный сеттер вызывается с декорированной функцией сеттера

(Декораторы вызываются со вторым параметром, дающим больше контекста, но нам не нужны эти детали для декоратора `@logged`.)

Возвращаемое значение декоратора - это новое значение, которое заменяет то, что он упаковывает. Для методов, геттер и сеттеров (getter and setter) возвращаемое значение - это другая функция, заменяющая этот метод, геттер или сеттер (getter or setter).

```js
// logged.mjs

export function logged(f) {
  const name = f.name;
  function wrapped(...args) {
    console.log(`starting ${name} with arguments ${args.join(", ")}`);
    const ret = f.call(this, ...args);
    console.log(`ending ${name}`);
    return ret;
  }
  wrapped.name = name;
  return wrapped;
}
```

Этот пример примерно «десахарирует» ("desugars") к следующему (т.е. может быть передан как таковой):

```js
let x_setter;

class C {
  m(arg) {
    this.#x = arg;
  }

  static #x_setter(value) { }
  static { x_setter = C.#x_setter; }
  set #x(value) { return x_setter.call(this, value); }
}

C.prototype.m = logged(C.prototype.m, { kind: "method", name: "method", isStatic: false });
x_setter = logged(x_setter, {kind: "setter", isStatic: false});
```

Обратите внимание, что геттеры и сеттеры оформляются отдельно. Аксессоры не «объединяются», как в предыдущих предложениях декораторов (если они не созданы для поля; см. Ниже).

Этот "desugars" относится к предложению статического блока класса - [class static block proposal](), которое предоставляет статическую конструкцию `static { }` для использования внутри тела класса, работающего в лексической области видимости класса. Также возможно "desugars" с точки зрения одноразовых статических частных полей, но это беспорядочно и запутанно. Однако предложение декораторов не зависит от статических блоков класса; это просто пояснительный прием.

### `@defineElement`

Пользовательские элементы HTML - [HTML Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) позволяют определить собственный элемент HTML. Элементы регистрируются с помощью `customElements.define`. Используя декораторы, регистрация может происходить заранее:

```js
import { defineElement } from "./defineElement.mjs";

@defineElement("my-class")
class MyClass extends HTMLElement {}
```

Классы можно декорировать так же, как методы и средства доступа. Класс отображается в опции значения - `value`.

```js
// defineElement.mjs
export function defineElement(name, options) {
  return (klass) => {
    customElements.define(name, klass, options);
    return klass;
  };
}
```

Декоратор принимает аргументы на месте своего использования, поэтому он реализован как функция, возвращающая другую функцию. Вы можете думать об этом как о «фабрике декораторов»: после применения аргументов он дает вам еще один декоратор.

Этот декоратор можно также "десахаризировать" (desugared):

```js
class MyClass extends HTMLElement {}
MyClass = defineElement("my-class")(MyClass, { kind: "class" });
```

#### Декораторы, добавляющие метаданные

Декораторы могут добавлять метаданные об элементах класса, добавляя свойство `metadata` объекту контекста, который им передается. Все объекты метаданных объединяются в `Object.assign` и помещаются в свойство, доступное из [`Symbol.metadata`] в классе. Например:

```js
@annotate({ x: "y" })
@annotate({ v: "w" })
class C {
  @annotate({ a: "b" }) method() {}
  @annotate({ c: "d" }) field;
}

C[Symbol.metadata].class.x; // "y"
C[Symbol.metadata].class.v; // "w"
C[Symbol.metadata].prototype.methods.method.a; // "a"
C[Symbol.metadata].instance.fields.field.c; // "d"
```

**ПРИМЕЧАНИЕ**. Точный формат объекта аннотаций не очень хорошо продуман и требует дополнительных уточнений. Главное, что я хотел бы здесь проиллюстрировать, это то, что это просто объект без какой-либо специальной библиотеки поддержки для чтения или записи, и он автоматически создается системой.

Этот декоратор `@annotate` может быть реализован следующим образом:

```js
function annotate(metadata) {
  return (_, context) => {
    context.metadata = metadata;
    return _;
  };
}
```

Каждый раз, когда вызывается декоратор, ему передается новый объект контекста, и после возвращения каждого декоратора считывается свойство метаданных объекта -`metadata` контекста, и если оно не определено, оно включается в [Symbol.metadata] для этого элемента класса.

Обратите внимание: поскольку метаданные хранятся в классе, а не в методе, метаданные не видны более ранним декораторам. Метаданные классов добавляются в конструктор после запуска всех декораторов классов, чтобы они не были потеряны при последующей упаковке.

### `@tracked`

Декоратор `@tracked` наблюдает за полем и запускает метод `render ()` при вызове установщика. Этот или подобные ему шаблоны распространены во фреймворках, чтобы избежать разброса по всему приложению лишней 'бухгалтерии', требующей повторного рендеринга.

Декорированные поля имеют семантику пар геттер / сеттер вокруг базовой части частного хранилища - ( private storage). Декораторы могут обернуть эти функции getter/setter. `@tracked` может обернуть эту пару геттер / сеттер для реализации поведения повторного рендеринга.

```js
import { tracked } from "./tracked.mjs";

class Element {
  @tracked counter = 0;

  increment() {
    this.counter++;
  }

  render() {
    console.log(counter);
  }
}

const e = new Element();
e.increment(); // logs 1
e.increment(); // logs 2
```

Когда поля декорированы, «обернутое» значение представляет собой объект с двумя свойствами: функции `get` и `set`, которые управляют базовым хранилищем (storage). Они созданы для использования `.call ()` с экземпляром класса в качестве получателя. Затем декоратор может вернуть новый объект той же формы. (Если один из обратных вызовов отсутствует, он остается на месте необернутым - (unwrapped).)

```js
// tracked.mjs

export function tracked({ get, set }) {
  return {
    get,
    set(value) {
      if (get.call(this) !== value) {
        set.call(this, value);
        this.render();
      }
    },
  };
}
```

Этот пример показывает грубую "десахаризацию" (desugared) следующим образом:

```js
let initialize, get, set;

class Element {
  #counter = initialize(0);
  get counter() { return this.#counter; }
  set counter(v) { this.#counter = v; }

  increment() { this.counter++; }

  render() { console.log(counter); }
}

{ get, set } = Object.getOwnPropertyDescriptor(Element.prototype, "counter");
{ get, set, initialize } = tracked({get, set}, { kind: "field", name: "counter", isStatic: false })
Object.defineProperty(Element.prototype, "counter", {get, set});
```

#### Ограниченный доступ к приватным полям и методам

Иногда определенному коду вне класса может потребоваться доступ к закрытым полям и методам. Например, два класса могут «взаимодействовать», или тестовый код в другом файле должен попасть внутрь класса.

Декораторы могут сделать это возможным, предоставив кому-либо доступ к закрытому полю или методу. Это может быть инкапсулировано в «закрытый ключ» ("private key") - объект, содержащий эти ссылки, который будет использоваться только для тех, кому это необходимо.

```js
import { PrivateKey } from "./private-key.mjs";

let key = new PrivateKey();

export class Box {
  @key.show #contents;
}

export function setBox(box, contents) {
  return key.set(box, contents);
}

export function getBox(box) {
  return key.get(box);
}
```

Обратите внимание, что это своего рода взлом, и его можно было бы улучшить с помощью таких конструкций, как ссылки на частные имена с помощью [`private.name`](https://gist.github.com/littledan/ab73ff08f98f33088a0072ad202445b1) и более широкой области частных имен с помощью [`private / with`](https://gist.github.com/littledan/5451d6426a8ed65c0f3c2822c51314d1). Но это показывает, что это предложение декоратора «естественно» раскрывает существующие вещи полезным способом.

```js
// private-key.mjs
export class PrivateKey {
  #get;
  #set;

  show({ get, set }) {
    assert(this.#get === undefined && this.#set === undefined);
    this.#get = get;
    this.#set = set;
    return { get, set };
  }
  get(obj) {
    return this.#get(obj);
  }
  set(obj, value) {
    return this.#set(obj, value);
  }
}
```

Этот пример можно грубо "обессахаривать" (desugared) следующим образом:

```js
let initialize, get, set;
export class Box {
  #_contents = initialize(undefined);
  get #contents() { return get.call(this); }
  set #contents(v) { set.call(this, v); }

  static {
    get = function() { return this.#_contents; },
    set = function(v) { this.#_contents = v; }
  }
}
({get, set, initialize} = key.show({get, set}, {kind: "field", isStatic: false}));
```

### `@deprecated`

Декоратор `@deprecated` выводит предупреждения при использовании устаревшего поля, метода или средства доступа. В качестве примера использования:

```js
import { deprecated } from "./deprecated.mjs";

export class MyClass {
  @deprecated field;

  @deprecated method() {}

  otherMethod() {}
}
```

Чтобы `deprecated` - нерекомендуемые элементы могли работать с различными типами элементов класса, поле `kind` объекта контекста позволяет декораторам видеть, какой тип синтаксической конструкции они не рекомендуют. Этот метод также позволяет выдавать ошибку, когда декоратор используется в контексте, где он не может применяться - например, весь класс не может быть помечен как устаревший, поскольку нет способа перехватить его доступ.

```js
// deprecated.mjs

function wrapDeprecated(fn) {
  let name = fn.name;
  function method(...args) {
    console.warn(`call to deprecated code ${name}`);
    return fn.call(this, ...args);
  }
  method.name = name;
  return method;
}

export function deprecated(element, { kind }) {
  switch (kind) {
    case "method":
    case "getter":
    case "setter":
      return wrapDecorated(element);
    case "field": {
      let { get, set } = element;
      return { get: wrapDeprecated(get), set: wrapDeprecated(set) };
    }
    default:
      // includes 'class'
      throw new Error(`Unsupported @deprecated target ${kind}`);
  }
}
```

Обессахаривание (desugaring) здесь аналогично приведенным выше примерам, которые показывают использование `kind`.

## Методы деораторов, требующие инициализации.

Некоторые методы декораторов основаны на выполнении кода при создании экземпляра класса. Например:

- Декоратор `@on('event')` для методов в классах, расширяющих HTMLElement, который регистрирует этот метод как прослушиватель событий в конструкторе.
- Декоратор `@bound`, который выполняет эквивалент `this.method = this.method.bind (this)` в конструкторе. Эта идиома отвечает цели Джордана Харбанда - быть более дружелюбной к monkey-patching, чем популярная идиома использования стрелочной функции в инициализаторе поля.

Мы рассматриваем несколько возможных вариантов того, как использовать этот тип идиомы.

### Вариант A. Конструкторы Mixin, обращающиеся к метаданным.

Эти декораторы могут быть созданы с помощью комбинации метаданных и миксина, который выполняет действия инициализации в своем конструкторе.

#### `@on` with a mixin

```js
class MyElement extends WithActions(HTMLElement) {
  @on("click") clickHandler() {}
}
```

Этот декоратор можно определить следующим образом:

```js
const handler = Symbol("handler");
function on(eventName)
  return (method, context) => {
    context.metadata = {[handler]: eventName};
    return method;
  }
}

class MetadataLookupCache {
  #map = new WeakMap();
  #name;
  constructor(name) { this.#name = name; }
  get(newTarget) {
    let data = this.#map.get(newTarget);
    if (data === undefined) {
      data = [];
      let klass = newTarget;
      while (klass !== null && !(this.#name in klass)) {
        for (const [name, {[this.#name]: eventName}]
             of Object.entries(klass[Symbol.metadata].instance.methods)) {
          if (eventName !== undefined) {
            data.push({name, eventName});
          }
        }
        klass = klass.__proto__;
      }
      this.#map.set(newTarget, data)
    }
    return data;
  }
}

let handlersMap = new MetadataLookupCache(handler);

function WithActions(superclass) {
  return class C extends superclass {
    constructor(...args) {
      super(...args);
      let handlers = handlersMap.get(new.target, C);
      for (const {name, eventName} of handlers) {
        this.addEventListener(eventName, this[name].bind(this));
      }
    }
  }
}
```

#### `@bound` with a mixin.

`@bound` может использоваться с суперклассом mixin следующим образом:

```js
class C extends WithBoundMethod(Object) {
  #x = 1;
  @bound method() {
    return this.#x;
  }
}

let c = new C();
let m = c.method;
m(); // 1, not TypeError
```

Этот декоратор можно определить как:

```js
const boundName = Symbol("boundName");
function bound(method, context) {
  context.metadata = { [boundName]: true };
  return method;
}
let boundMap = new MetadataLookupCache(boundName);

function WithBoundMethods(superclass) {
  return class C extends superclass {
    constructor(...args) {
      super(...args);
      let names = boundMap.get(new.target, C);
      for (const { name } of names) {
        this[name] = this[name].bind(this);
      }
    }
  };
}
```

Обратите внимание на общее использование `MetadataLookupCache` в обоих примерах; это или последующее предложение следует рассмотреть возможность добавления стандартной библиотеки для обработки метаданных для этой цели.

### Вариант Б. Контекстное ключевое слово `init` для методов.

Если требовать суперкласс / миксин для случаев, требующих действия инициализации, неприемлемо, ключевое слово `init` в объявлении метода изменяет метод на «метод инициализации». Это ключевое слово позволяет декораторам добавлять действия инициализации, запускаемые при выполнении конструктора.

#### `@on` with `init`

Использование:

```js
class MyElement extends HTMLElement {
  @on('click') init clickHandler() { }
}
```

«Метод инициализации» (метод, объявленный с помощью `init`) вызывается аналогично декоратору метода, но ожидается, что он вернет пару {метод, инициализация} - `{method, initialize}`, где инициализация вызывается с этим значением, являющимся новым экземпляром, без аргументов и ничего не вернув.

```js
function on(eventName) {
  return (method, context) => {
    assert(context.kind === "init-method");
    return {
      method,
      initialize() {
        this.addEventListener(eventName, method);
      },
    };
  };
}
```

'Обесахаривание' (desugared) определения класса будет примерно таким:

```js
let initialize;
class MyElement extends HTMLElement {
  clickHandler() { }
  constructor(...args) {
    super(...args);
    initialize.call(this);
  }
}
{method: MyElement.prototype.clickHandler, initialize} =
  on('click')(MyElement.prototype.clickHandler,
            {kind: "init-method", isStatic: false, name: "clickHandler"});
```

#### `@bound` with `init`
Ключевое слово `init` для методов также можно использовать для создания декоратора `@bound`, который используется следующим образом:

```js
class C {
  #x = 1;
  @bound init method() { return this.#x; }
}

let c = new C;
let m = c.method;
m();  // 1, not TypeError
```

Декоратор `@bound` может быть реализован следующим образом:

```js
function bound(method, {kind, name}) {
  assert(kind === "init-method");
  return {method, initialize() { this[name] = this[name].bind(this); }};
}
```

### Возможные расширения.
О декораторах дальнейших построек можно узнать на [EXTENSIONS.md](https://github.com/tc39/proposal-decorators/blob/simplified/EXTENSIONS.md).


## Синтаксис.
Это предложение декораторов использует синтаксис предыдущего предложения декораторов этапа 2. Это означает, что:

* Выражения-декораторы ограничены цепочкой переменных, доступ к свойствам с `.` но не `[]`, а `call()`. Чтобы использовать произвольное выражение в качестве декоратора, `@(expression)` - это escape-штрих.

* Выражения классов (Class expressions) могут быть декорированны, а не только объявления классов (class declarations).

* Декораторы классов идут после экспорта `export` и по умолчанию  - `default`.

Не существует специального синтаксиса для определения декораторов; любая функция может быть применена как декоратор.

## Подробная семантика.
Три этапа оценки декоратора:

1. Выражения-декораторы (то, что стоит после `@`) _оцениваются_ вкраплениями с именами вычисленных свойств. 
2. Декораторы _вызываются_ (как функции) во время определения класса после оценки методов, но до объединения конструктора и прототипа. 
3. Декораторы _применяются_ (изменяя конструктор и прототип) сразу после того, как все они были вызваны. 

Семантика здесь обычно соответствует консенсусу, достигнутому на встрече TC39 в мае 2016 года в Мюнхене.

### 1. Оценка декораторов
Декораторы оцениваются как выражения, чередующиеся в порядке их оценки с именами вычисленных свойств. Это идет слева направо, сверху вниз. Результат декораторов сохраняется в эквиваленте локальных переменных, которые впоследствии будут вызваны после того, как определение класса первоначально завершит выполнение.