/*
// 변수 : 선언. 초기화. 재할당

const 변수1 = "코딩";
let 변수2 = "자바스립트";

// 변수1 = '코딩은 어려워';
변수2 = "html";

// ====================================

// 데이터 타입, 자료형 :
// 1. string : 문자열

const str = "안녕";
const str2 = "hi";
const num = "2!!";

// 2.number : 숫자
const number = 2;

// 3. bigInt : 큰값이 숫자

// 4. boolean : true, false
const bool = true;
const bool1 = false;

// 5. symbol : 중복되지 않는 고유값

// 6-7. null / undefined

const a = undefined;
const b = null;

let variable;
console.log(variable);

// 8. object : 객체 - 함수, 배열, 객체

// ====================================

// 1. 산술연산자 : +, - , /, *, %, **, ++, --

const aa = 10 % 3;
console.log(aa);

const bb = 10 ** 2;
console.log(bb);

let cc = 5;
cc += 10; // cc = cc + 10
console.log(cc);

cc -= 8; // cc = cc - 8;
console.log(cc);

// 2. 할당 연산자 : =

// 3. 문자열 연산자 : + , +=
let data = "happy" + " " + "2022";
console.log(data);

data += "!!"; //data = data + '!!'
console.log(data);

// 비교 연산자 :
// 1. == :  대충 비교
// 2. === : 엄격하게 비교
// 3. != : 대충 비교
// 4. !== : 엄격하게 비교
// 5. 부등호 : > , <, >= , <=

//논리연산자 : &&, ||, !
// && : 조건 중 하나라도 false가 되면 => false
// || : 두개의 조건이 모두 false여야지 => false
// ! : 반대

*/

/*
// 배열
// 1. 선언 : [], new Array(), 빈배얄에 index 이용해서 하나씩 추가
// const travel_spot = ['방콕', '뉴욕', '파리'];
// const travel_spot = new Array('방콕', '뉴욕', '파리');
// console.log(travel_spot);
const travel_spot = new Array();
travel_spot[0] = "방콕";
travel_spot[1] = "뉴욕";
travel_spot[2] = "파리";

// 2. 접근 : index
const paris = travel_spot[2];
console.log(paris);

// 3. 추가 및 삭제

// travel_spot = ['토론토', '멜버른', '바르셀로나', '아테네']; //재할당 불가

// push : 뒤에 원소 추가
travel_spot.push("토론토", "퀘백");
console.log(travel_spot);

// unshift : 앞에 원소 추가
travel_spot.unshift("바르셀로나");
console.log(travel_spot);

// splice : 원하는 지점에 추가 및 삭제
// -> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
travel_spot.splice(4, 0, "멜버른", "아테네");
console.log(travel_spot);

// pop : 뒤에서 원소 삭제
const result = travel_spot.pop();
console.log(travel_spot, result);

// shift : 앞에서 원소 삭제
const result1 = travel_spot.shift();
console.log(travel_spot, result1);

// splice
const result2 = travel_spot.splice(3, 3);
console.log(travel_spot, result2);

travel_spot.splice(1, 1, "이스탄불", "하노이");
console.log(travel_spot);
*/

/*
// const pooh = ['pooh', 'bear', 'disney character', 'boy'];
// 1. 객체 선언
const pooh = {
  name: "pooh",
  species: "bear",
  job: "disney character",
  gender: "boy",
  "say-Hi": function () {
    console.log("I'm winnie the pooh, What's your name?");
  },
};

// 2. 객체 접근 : ., []

// console.log(pooh['species']);
// console.log(pooh['say-Hi']());

// 3. 객체에 추가 및 삭제

pooh["say-Bye"] = function () {
  console.log("I'm winnie the pooh, See you later");
};

// console.log(pooh);

pooh.favorites = ["honey", "friends", "cake"];

// console.log(pooh);

delete pooh.favorites;

// console.log(pooh);

// 생성자 함수 : 틀

function Character(name, species, job, gender) {
  this.name = name;
  this.species = species;
  this.job = job;
  this.gender = gender;
  this["say-Hi"] = function () {
    console.log(`I'm ${this.name}, What's your name?`);
  };
  this["say-Bye"] = function () {
    console.log(`I'm ${this.name}, See you later`);
  };
}

const winnie_the_pooh = new Character(
  "winnie the pooh",
  "bear",
  "disney character",
  "boy"
);

console.log(winnie_the_pooh);

console.log(winnie_the_pooh["say-Hi"]());

const snoopy = new Character("snoopy", "dog", "comic book character", "boy");

const pikachu = new Character(
  "pikachu",
  "squirrel",
  "pokemon character",
  "boy"
);

console.log(snoopy, pikachu);
console.log(snoopy["say-Bye"](), pikachu["say-Bye"]());

winnie_the_pooh.favorites = ["honey", "friends", "cake"];
console.log(winnie_the_pooh);

// const obj = new Object();
// console.log(obj)
// obj.name = 'dwell';
// obj.greeting = function(){
//   console.log('hi')
// }

const arr = new Array();
const obj = new Object({
  name: "dwell",
  greeting: function () {
    console.log("hi");
  },
});

console.log(obj, arr);
*/

/*
// function multiply10 (num) {
//   const result = num * 10;
//   return result;
// }

// const data = multiply10(10);
// console.log(data);

// const result = multiply10(10);

// =======================================
// arrow function :

const multiply10 = (num) => num * 10;

const data = multiply10(100);
console.log(data);
*/

/*
// if문
// false : 0, -0, null, false, NaN, undefined, ''

let age = 15;

// if ( age > 19 ) {
//   console.log('술을 마실 수 있다');
// }

// console.log('미성년자');

// ==============================================
// if, else문

// if ( age > 19 ) {
//   console.log('술을 마실 수 있다');
// } else {
//   console.log('미성년자');
// }

// ==============================================
// 삼항연산자 : 조건 ? 참일때 실행될 코드 : 기짓일때 실행될 코드

// const result = age > 19 ? '술을 마실 수 있다':  '미성년자';
// console.log(result);

// ==============================================
// if, else if, else문

// if (age < 10) {
// 	console.log('애기');
// } else if (age >= 10 && age < 20) {
// 	console.log('10대');
// } else if (age >= 20 && age < 30) {
// 	console.log('20대');
// } else if (age >= 30 && age < 40) {
// 	console.log('30대');
// } else if (age >= 40 && age < 50) {
// 	console.log('40대');
// } else if (age >= 50 && age < 60) {
// 	console.log('50대');
// } else if (age >= 60 && age < 70) {
// 	console.log('60대');
// } else {
// 	console.log('노인');
// }

// age = 63;

// if (age >= 70) {
// 	console.log('노인');
// } else if (age >= 60) {
// 	console.log('60대');
// } else if (age >= 50) {
// 	console.log('50대');
// } else if (age >= 40) {
// 	console.log('40대');
// } else if (age >= 30) {
// 	console.log('30대');
// } else if (age >= 20) {
// 	console.log('20대');
// } else if (age >= 10) {
// 	console.log('10대');
// } else {
// 	console.log('애기');
// }

// ==============================================
// switch문

age = 30;

switch (age) {
  case 70:
    console.log("70대");
    break;
  case 60:
    console.log("60대");
    break;
  case 50:
    console.log("50대");
    break;
  case 40:
    console.log("40대");
    break;
  case 30:
    console.log("30대");
    break;
  case 20:
    console.log("20대");
    break;
  case 10:
    console.log("10대");
    break;
  default:
    console.log("애기");
}
*/

/*
// 1. For문

// for (초기값 ; 종료조건 ; 증감) {
//   실행할 코드
// }

// for (let i = 1 ; i < 11 ; i++) {
//   console.log(i);
// }

// const numArr = [45, 32, 11, 98, 22];

// for (let i = 0; i < numArr.length ; i++) {
//   console.log(numArr[i]);
//   numArr[i] += 10;
// }

// console.log(numArr);

// ===============================================
// 2. while문

// 시작점
// while (조건) {
//   코드
//   증감
// }

// let i = 12;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (true) {
//   if (i > 10) {
//    break;
//  }

//   i++;
//   if (i%2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// const numArr = [45,32,11,98,22];

// let i = 12;
// while (i < numArr.length) {
//   // console.log(numArr[i]);
//   numArr[i] += 10;
//   i ++;
// }

// console.log(numArr);

// =====================================
// 3. do while문

let i = 12;
do {
  console.log(i);
  i++;
} while (i < 11);
*/