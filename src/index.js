import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

// // // const,letの変数宣言
// var val1 = "var変数";
// console.log(val1);

// // //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // //var変数は再宣言可能
// val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言しています。";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "Taichi",
//     age: 20,
// };

// //nameの中身をかえる
// //オブジェクトのプロパティにアクセスする際は.を使用する。
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// //配列について
// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";

// // //.pushでval5に値を追加する
// val5.push("monkey");
// console.log(val5);

// //テンプレート文字列
// const name = "Taichi";
//  const age = 20;
// //  [私の名前はTaichiです。年齢は20歳です。]これを出したい

// //  従来の方法
//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// //コードも長いし読みづらい。。。

// // //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// //アロー関数について

// //従来の関数
// function func1(str) {
//   return str;
// }

// // // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// //分割代入
//  const MyProfile = {
//    name: "たいち",
//    age: 20,
//  };
//  const message1 = `名前は${MyProfile.name}です。年齢は${MyProfile.age}歳です。`;
//  console.log(message1);

//  const {name, age} = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

// const myProfile = ['たいち', 20];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // //配列での分割代入について

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// //デフォルト値、引数など
// const sayHello = (name = "taichi") => console.log(`こんにちは！${name}さん！`);
// sayHello("taichi");

// //スプレッド構文
// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // //配列の中身を順番に処理して展開してくれる
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// //配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, arr5];
// console.log(arr7);

// //NGな例
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// //mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "清水"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// // mapを使用した配列の処理
// const nameArr2 = nameArr.map((name)=>{
//    return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}`));

// //filterある条件に一致したものだけ返却して新しい配列を生成する

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name==="清水") {
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

// //三項演算子

// //ある条件？条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です。';
// }
// console.log(checkSum(50, 60));

// //論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }
// if(flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

// // ||は左側がfalseなら右を返す。
// const num = 100;
// //nullはfalse判定される
// const fee = num || "金額未定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す。
// const num2 = null;
// const fee2 = num2 && "何設定されました。";
// console.log(fee2);
