/*
console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("Деструктурицазция объектов");
const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
};

const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);

const { name, age, city } = user;
console.log(name, age, city);

const { name: personName, country = "Россия" } = user;
console.log(personName, country);

console.log("Деструктуризация в параметрах");

//старый
function printUserOld(user) {
    console.log(`Имя: ${user.name}`);
    console.log(`Возраст: ${user.age}`);
    console.log(`Город: ${user.city}`);
}

//новый
function printUser({ name, age, city }) {
    console.log(`Имя: ${name}`);
    console.log(`Возраст: ${age}`);
    console.log(`Город: ${city}`);
}

printUserOld(user);
console.log();
printUser(user);
*/

/*
console.log("=== Деструктуризация продукта ===");

const product = {
    name: "MacBook Pro 14",
    price: 189000,
    category: "Ноутбуки",
    inStock: true
};

const { name, price, category, inStock } = product;

function printProduct({ name, price, category, inStock }) {
    console.log(`Название: ${name}`);
    console.log(`Цена: ${price.toLocaleString('ru-RU')} ₽`);
    console.log(`Категория: ${category}`);
    console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
}

printProduct(product);
*/

/*
console.log("Spread для массивов");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log("Объединённый массив:", combined);

const copy = [...arr1]
console.log("Расширенный массив:", extended);

console.log("Spread для объектов");

const person = {
    name: "Иван",
    age: 30,
};

const fullInfo = { ...person, ...address };
console.log("Полная информация:", fullInfo);

const personCopy = { ...person };
console.log("Копия объекта:", personCopy);

const update = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);

console.log("Rest оператор");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные числа:", rest);
*/

/*
console.log("=== Spread & Rest ===");

const numbers1 = [10, 25, 8, 42];
const numbers2 = [33, 7, 19];

const combined = [...numbers1, ...numbers2];
console.log("Объединённый массив:", combined);

function findMax(...args) {
    if (args.length === 0) return "Нет аргументов";
    return Math.max(...args);
}
console.log("Максимум из списка:", findMax(12, 45, 3, 89, 21, 7));


const baseUser = { id: 1, name: "Алексей" };
const extendedUser = { role: "admin", active: true };
const fullUser = { ...baseUser, ...extendedUser };
console.log("Объединённый объект:", fullUser);
*/

/*
console.log("Промисы");

const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});

simplePromise
    .then((result) => console.log("Результат:", result))
    .catch((error) => console.log("Ошибка:", error));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}

delay(1000)
    .then((message) => console.log(message));

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0){
                resolve({
                    id: userId,
                    name: "Иван Иванов",
                    email: "ivan@example.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}

fetchUserData(1)
    .then((user) => console.log("Пользователь:", user))
    .catch((error) => console.log("Ошибка:", error));

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Шаг 1 завершён"), 500);
    });
}

function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
    });
}

function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
    });
}

step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((finalResult) => console.log("Финальный результат:", finalResult))
    .catch((error) => console.log("Ошибка в цепочке:", error));
*/

/*
console.log("=== Промис checkInventory ===");

function checkInventory(itemName, inStock) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inStock) {
                resolve(`✅ Товар "${itemName}" доступен. Можно оформлять заказ.`);
            } else {
                reject(`❌ Ошибка: товара "${itemName}" нет на складе.`);
            }
        }, 1000);
    });
}

checkInventory("AirPods Pro", true)
    .then(successMsg => console.log(successMsg))
    .catch(errMsg => console.log(errMsg));

checkInventory("PlayStation 6", false)
    .then(successMsg => console.log(successMsg))
    .catch(errMsg => console.log(errMsg));
*/

/*
console.log("Async/Await");

async function greet() {
    return "Привет!";
}

greet().then((message) => console.log(message));

function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ temp: 22, condition: "Солнечно" });
        }, 1000);
    });
}

async function showWeather() {
    console.log("Загрузка погоды...");
    const weather = await getWeather();
    console.log(`Температура: ${weather.temp}℃, ${weather.condition}`);
}

showWeather();

async function fetchData(shouleFail) {
    return new Promise((reslove, reject) => {
 		setTimeout(() => {
 			if (shouleFail) {
 				reject('Ошибка при загрузке данных');
			} else {
 				reslove({ data: 'Важные данные' });
 			}
		}, 800);
    });
}

async function getData() {
 	try {
 		const resuit = await fetchData(false);
 		console.log('Успешно', resuit.data);

 		const failedResuit = await fetchData(true);
 		console.log('это не выполняетмя');
 	} catch (error) {
 		console.log('Поймана ошибка', error);
    }
}

getData()
*/

/*
async function cookDinner() {
    console.log('Начинаем готовить...');

    const pasta = await delay(1000).then(() => 'Паста готова');
    console.log(pasta);

    const sauce = await delay(500).then(() => 'Соус готов');
    console.log(sauce);

    const salad = await delay(700).then(() => 'Салат готов');
    console.log(salad);

    return 'Ужин готов';
}

function delay(ms) {
return new Promise(reslove => {
		setTimeout(() => {
			reslove(`Прошло ${ms} миллисекунд`);
		}, ms);
 	});
}

cookDinner().then(resuit => console.log(resuit));

async function cookDinnerFast() {
    console.log('Готовим все одновременно...');

    const [pasta, sauce, salad] = await Promise.all([
 		delay(1000).then(() => 'Паста готова'),
		delay(500).then(() => 'Соус готов'),
 		delay(700).then(() => 'Салат готов'),
 	]);

 	console.log(pasta, sauce, salad);
 	return 'Ужин готов быстрее';
}

cookDinnerFast().then(resuit => console.log(resuit));
*/

/*
async function processOrder(orderId) {
  console.log(`📦 Начинаем обработку заказа #${orderId}...`);
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => Math.random() > 0.3 ? resolve() : reject("Товар временно отсутствует"), 1000);
    });
    console.log("Товар проверен и доступен.");

    // 2. Расчёт стоимости (задержка 0.8с)
    const price = await new Promise(res => setTimeout(() => res(2450), 800));
    console.log(`Рассчитана стоимость: ${price} ₽`);


    const status = await new Promise(res => setTimeout(() => res("Подтверждён"), 500));
    console.log(`Статус: ${status}`);
  } catch (err) {
    console.error(`Ошибка заказа #${orderId}: ${err}`);
  }
}

processOrder(101);
setTimeout(() => processOrder(102), 2500);
*/