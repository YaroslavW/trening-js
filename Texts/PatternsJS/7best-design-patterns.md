# 7 лучших шаблонов дизайна JavaScript, которые вы должны знать

7 лучших шаблонов проектирования JavaScript, которые вы должны знать. Шаблоны проектирования в JavaScript - это многоразовые решения, применяемые для решения часто возникающих проблем при написании веб-приложений на JavaScript.

## Введение

Вполне уместно называть шаблоны проектирования JavaScript шаблонами для решения проблем, но это не совсем то, что эти шаблоны могут заменить разработчиков.

Шаблоны проектирования помогают объединить опыт многих разработчиков, чтобы оптимизировать структуру кода для решения проблем, которые мы ищем, и дают общий словарь, используемый для описания решений наших проблем, а не для описания синтаксиса и семантики нашего кода.

Шаблоны проектирования JavaScript помогают разработчикам писать организованный, красивый и хорошо структурированный код. Хотя шаблоны проектирования при использовании могут быть легко использованы повторно, они никогда не могут служить дополнением к разработчикам, а только поддерживают их, предотвращая незначительные проблемы, которые могут привести к серьезным проблемам при разработке веб-приложений, путем предоставления обобщенных решений, не привязанных к конкретным проблемам.

Они уменьшают общую кодовую базу за счет устранения ненужных повторов, что делает наш код более надежным, чем специальные, собственные решения.

В этой статье я исследую семь лучших и самых популярных шаблонов проектирования JavaScript, большинство из которых, конечно же, подпадут под три категории: создание шаблонов проектирования, структурных шаблонов проектирования и шаблонов поведенческого проектирования. Шаблон похож на следующее изображение; просто чтобы познакомить вас с контекстом.

## **1. Шаблон проектирования конструктор.**

Это специальный метод, который используется для инициализации вновь созданных объектов после выделения памяти. Поскольку JavaScript обычно является объектно-ориентированным, он больше всего работает с объектами, поэтому я намерен углубиться в конструкторы объектов. Есть три способа создания новых объектов в JavaScript:

Ниже приведен один из способов создания шаблона проектирования конструктора.

```js
// This creates a new empty Object

var newObject = {};

// This creates a new empty Object

var newObject = Object.create(Object.prototype);

var newObject = newObject();
```

**2.Чтобы получить доступ к свойствам функции, вам необходимо инициализировать объект.**

```js
const object = new ConstructorObject();
```

При этом новое ключевое слово выше сообщает JavaScript, что объект `aconstructorObjects` должен действовать как конструктор. Наследование - это то, что этот шаблон проектирования не поддерживает. Узнать подробности
можно [здесь](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript)

## **2. Prototype Pattern**

Паттерн прототипа основан на наследовании прототипов, при котором объекты создаются, чтобы действовать как прототипы для других объектов. На самом деле прототипы действуют как проект для каждого созданного конструктора объекта.

_Пример_

```js
var myCat= {
name:"Ford Escort",
brake:function(){
console.log("Stop! I am applying brakes");
}
Panic : function (){
console.log ( "wait. how do you stop thuis thing?")
}
}
// use objec create to instansiate a new car
// используем объект create для создания экземпляра новой машины
var yourCar= object.create(myCar);
//You can now see that one is a prototype of the other
// Теперь вы можете видеть, что один является прототипом другого.
console.log (yourCar.name);]
```

## **3. Module Design Pattern**

В шаблоне проектирования модуля есть улучшение по сравнению с шаблоном-прототипом. В шаблоне модуля задаются различные типы модификаторов (как частные, так и общедоступные). Вы можете создавать аналогичные функции или свойства без конфликтов. Существует возможность публичного переименования функций. Пугающей частью этого является невозможность переопределить созданные функции извне.

_Например_

```js
function AnimalContainter() {
  const container = [];

  function addAnimal(name) {
    container.push(name);
  }

  function getAllAnimals() {
    return container;
  }

  function removeAnimal(name) {
    const index = container.indexOf(name);
    if (index < 1) {
      throw new Error("Animal not found in container");
    }
    container.splice(index, 1);
  }

  return {
    add: addAnimal,
    get: getAllAnimals,
    remove: removeAnimal,
  };
}

const container = AnimalContainter();
container.add("Hen");
container.add("Goat");
container.add("Sheep");

console.log(container.get()); //Array(3) ["Hen", "Goat", "Sheep"]
container.remove("Sheep");
console.log(container.get()); //Array(2) ["Hen", "Goat"]
```

## **4. Singleton Pattern**

Это важно в сценарии, когда необходимо создать только один экземпляр, например, соединение с базой данных. Создать экземпляр можно только тогда, когда соединение закрыто или вы обязательно закрываете открытый экземпляр перед открытием нового. Этот шаблон также называют строгим шаблоном, одним из недостатков, связанных с этим шаблоном, является его устрашающий опыт тестирования из-за наличия скрытых зависимостей объектов, которые нелегко выделить для тестирования.

_Пример_

```js
function DatabaseConnection() {
  let databaseInstance = null;

  // tracks the number of instances created at a certain time
  let count = 0;

  function init() {
    console.log(`Opening database #${count + 1}`);
    //now perform operation
  }
  function createIntance() {
    if (databaseInstance == null) {
      databaseInstance = init();
    }
    return databaseInstance;
  }
  function closeIntance() {
    console.log("closing database");
    databaseInstance = null;
  }
  return {
    open: createIntance,
    close: closeIntance,
  };
}

const database = DatabseConnection();
database.open(); //Open database #1
database.open(); //Open database #1
database.open(); //Open database #1
database.close(); //close database
```

## **5. Factory Pattern.**

Это творчество, связанное с созданием объектов без конструктора. Он предоставляет общий интерфейс для создания объектов, где мы можем указать тип создаваемых фабричных объектов. Поэтому мы указываем только объект, а фабрика создает и возвращает его для использования. Для нас разумно использовать шаблон фабрики, когда настроенный компонент объекта имеет высокий уровень сложности и когда мы хотим легко создавать различные экземпляры объектов в зависимости от среды, в которой мы находимся. Мы также можем использовать шаблон фабрики при работе со многими небольшими объектами, имеющими одинаковые свойства, и при составлении объектов, требующих развязки.

_Пример_

```js
// Dealer A

DealerA = {};

DealerA.title = function title() {
  return "Dealer A";
};

DealerA.pay = function pay(amount) {
  console.log(
    `set up configuration using username: ${this.username} and password: ${this.password}`
  );
  return `Payment for service ${amount} is successful using ${this.title()}`;
};

//Dealer B

DealerB = {};
DealerB.title = function title() {
  return "Dealer B";
};

DealerB.pay = function pay(amount) {
  console.log(
    `set up configuration using username: ${this.username}
and password: ${this.password}`
  );
  return `Payment for service ${amount} is successful using ${this.title()}`;
};

//@param {*} DealerOption
//@param {*} config

function DealerFactory(DealerOption, config = {}) {
  const dealer = Object.create(dealerOption);
  Object.assign(dealer, config);
  return dealer;
}

const dealerFactory = DealerFactory(DealerA, {
  username: "user",
  password: "pass",
});
console.log(dealerFactory.title());
console.log(dealerFactory.pay(12));

const dealerFactory2 = DealerFactory(DealerB, {
  username: "user2",
  password: "pass2",
});
console.log(dealerFactory2.title());
console.log(dealerFactory2.pay(50));
```

## **6. Observer Pattern**

Шаблон проектирования наблюдателя удобен в месте, где объекты взаимодействуют с другими наборами объектов одновременно. В этом шаблоне наблюдателя нет ненужных `push` и `pull` событий по состояниям, скорее задействованные модули только изменяют текущее состояние данных.

_Пример_

```js
function Observer() {
  this.observerContainer = [];
}

Observer.prototype.subscribe = function (element) {
  this.observerContainer.push(element);
};

// the following removes an element from the container

Observer.prototype.unsubscribe = function (element) {
  const elementIndex = this.observerContainer.indexOf(element);
  if (elementIndex > -1) {
    this.observerContainer.splice(elementIndex, 1);
  }
};

/**
 * we notify elements added to the container by calling
 * each subscribed components added to our container
 */
Observer.prototype.notifyAll = function (element) {
  this.observerContainer.forEach(function (observerElement) {
    observerElement(element);
  });
};
```

## **7. Command Pattern**

Подводя итоги, я бы сказал, что шаблон проектирования команд завершает мои 7 лучших сумм шаблонов проектирования JavaScript. Шаблон разработки команд инкапсулирует вызов методов, операции или запросы в один объект, чтобы мы могли передавать вызовы методов по своему усмотрению. Шаблон проектирования команд дает нам возможность выдавать команды из чего-либо, выполняющего команды, и вместо этого делегирует ответственность различным объектам. Эти команды представлены в формате `run ()` и `execute ()`.

```js
(function () {
  var carManager = {
    //information requested
    requestInfo: function (model, id) {
      return "The information for " + model + " with ID " + id + " is foo bar";
    },

    // now purchase the car
    buyVehicle: function (model, id) {
      return "You have successfully purchased Item " + id + ", a " + model;
    },

    // now arrange a viewing
    arrangeViewing: function (model, id) {
      return (
        "You have successfully booked a viewing of " +
        model +
        " ( " +
        id +
        " ) "
      );
    },
  };
})();
```

---

**Заключение**
