
// Настояшее врем
// var now = moment();
// moment.locale('ru');
// // moment.lang('ru');
// console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


// moment.locale('ru');
// Работает с английским по умолчанию .
// для других языков:
// import moment from 'moment'
// import 'moment/locale/ru'  // without this line it didn't work
// moment.locale('ru')

// var now = moment();
// var event = moment('2016-03-30 23:59:57');

// console.log('Сегодня: ' + now.format('YYYY-MM-DD HH:mm:ss'));
// console.log('Дата события: ' + event.format('YYYY-MM-DD HH:mm:ss'));
// console.log('Событие произошло ' + event.fromNow());
// console.log('Разница во времени: ' + now.subtract(event.toObject()).format('YYYY-MM-DD HH:mm:ss'));



moment.locale('ru');
console.log(moment("20111031", "YYYYMMDD").fromNow());
// 7 years ago


console.log(moment().subtract(10, 'days').calendar())
//today 03/06/2019
// 02/24/2019

console.log(moment().calendar());
// Today at 2:27 PM

console.log(moment().add(3, 'days').calendar())
// Saturday at 2:28 PM

console.log(moment().format('LLLL'))
//Wednesday, March 6, 2019 2:29 PM