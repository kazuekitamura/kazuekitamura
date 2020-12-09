// console.log("it's me!");//文字列にシングルクォテーションがある場合、外をダブルクォテーションで囲む

//バックスラッシュの直後の文字は文字列となる
// console.log('it\'s me!');

// バックスラッシュの特殊な使い方　\nで改行　\tタブ
// console.log('hel\nlo wor\tld');

//文字列の連携
// console.log('hello'+'world');

//演算子　四則計算
// console.log(10 + 3);//13
// console.log(10 - 3);//7
// console.log(10 * 3);//30
// console.log(10 / 3);//3.333333....
// console.log(10 % 3);//1  割り算のあまり
// console.log(10 ** 3);//1000 10の３乗

// console.log(2 +10 * 3);//32
// console.log((2 +10) *3);//36

//定数

//command + d でまとめて選択
//定数の宣言、右の値を左の式に代入
// const price =150;         
// console.log(price * 140);
// console.log(price * 160);

//変数
// let price =150;         
// console.log(price * 140);
// console.log(price * 160);
// price =170;
// console.log(price * 140);
// console.log(price * 160);

let price = 500;
// price = price + 100;//600
price += 100;

// price = price * 2;//1200
price *= 2;

// price = price +1;
// price += 1
price ++;//1201

// price -= 1;
price --;//1200

console.log(price);//1200

//typeofでもじの型を知ることできる
console.log(typeof 'hell');

//+記号は演算子として、’で閉じられている文字列を文字として扱う、その場合でもparseIntを使って数字の10を10進数にして計算することができる
console.log('5' + 3);
console.log(parseInt('5',10) + 3);
//試しに数字ではないものは　NaNとコンソールに表示される
console.log(parseInt('hello' + 3));

// const price = 1200;
console.log(price > 1000);//ture
console.log(price < 1000);//false
console.log(price >= 1000);//ture
console.log(price <= 1000);//false
console.log(price === 1000);//false  等しい
console.log(price !== 1000);//ture　　異なる
// falseと表示されるもの　0 ,null, undefind,' ',false
//tureと表示されるものは　それ以外は表示される

//ture,falseで評価されるBoolean
console.log(Boolean('hello'));
console.log(Boolean(0));

//if条件分岐
// const score =70;
// if (score >= 80){
//     console.log('Great!');
// } else if (score >= 60){
//     console.log('Good!');
// } else{
//     console.log('OK');
// }

//if文を短く書く条件演算子　条件式？　tureの処理　falseの処理を書く
// score >= 80 ? console.log('Great!') : console.log('Good!');

//論理演算子
const score =60;
const name ='taguchi';

if(score >= 50) {
    if(name === 'taguchi'){
        console.log('Good job!');
    }
}

// && なおかつ（AND）
// || もしくは（OR）
//  ! ではない（NOT)

if (score >= 50 && name === 'taguchi'){
    console.log('Good job!');
}

//switch  条件式に＝＝＝ばかり並ぶ時は簡略化できる
const signal = 'green';

switch (signal){
    case 'red':
        console.log('Stop!');
    case 'yellow':
        console.log('Caution!');
    case 'blue':
    case 'green':
        console.log('go!');
    break;
    default:   //どれにも当てはまらない場合
        console.log('Wrong signal!');
    break;
}

//for ループ処理で数字を貼るテンプレートリテラル　カウンターによくiが使われる
// for (let i =1; i <= 10; i++){
//     console.log('hello' + i);
// }
// for (let i =1; i <=10; i++){
//     console.log(`hello${i}`);
// }

// 条件が満たされる間処理が行われる　while文
//hpが０になるまで毎回15が引かれる処理が繰り返される
//(hp > 0)を書き忘れると無限ループになる
// let hp = 100;
// while (hp > 0){
//     console.log(`${hp} HP left!`);
//     hp -=15;
// }

//初めから条件に当てはまらず処理がされない場合でも、中の値の数値を知りたい場合doを用いる
let hp = -50;
do {
    console.log(`${hp} HP left!`);
    hp -=15;
}while (hp > 0);

//特定の回だけ処理をスキップしたい continue;
//４の処理だけスキップしたい、４だけ表示されない
// for (let i = 1; i <= 10; i++){
//     if(i ===4){    
//         continue;  
//     }
//     console.log(i);
// }
//３の倍数だけスキップ
// for (let i = 1; i<=10; i++){
//     if(i % 3 ===0){
//         continue;
//     }
//     console.log(i);
// }

// ループの処理を止めたい時はbreakを使う
// for(let i =1; i <=10; i++){
//     if(i ===4){
//         break;
//     }
//     console.log(i);
// }

//関数で処理をまとめる
// function showAd(){
//     console.log('-------------');
//     console.log('-----Ad------');
//     console.log('-------------'); 
// }
// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd();
// console.log('Tom is great!');

//関数に渡す値、引数message　constもいらない
// function showAd(message){//仮引数
//         console.log('-------------');
//         console.log(`-----${message}------`);//バッククォテーション
//         console.log('-------------'); 
//     }
//     showAd('Header Ad');//実引数
//     console.log('Tom is great!');
//     console.log('Bob is great!');
//     showAd('Ad');
//     console.log('Steve is great!');
//     console.log('Richard is great!');
//     showAd('Footer Ad');
//     console.log('Tom is great!');

    // function showAd(message = 'Ad'){//何も値が渡されない場合、初期値を設定することができる今回はAd
    //     console.log('-------------');
    //     console.log(`-----${message}------`);//バッククォテーション
    //     console.log('-------------'); 
    // }
    // showAd('Header Ad');
    // console.log('Tom is great!');
    // console.log('Bob is great!');
    // showAd();//渡す値が入っていないので初期値のAdが入ってくる
    // console.log('Steve is great!');
    // console.log('Richard is great!');
    // showAd('Footer Ad');
    // console.log('Tom is great!');

//合計を繰り返す　console.log(total);の処理はfunctionの中に入れると処理されない
// function sum(a, b, c) {
//     return a + b + c;
// }
// const total = sum(1, 2, 3) + sum(4, 5, 6); //21
// console.log(total);

//関数宣言をする場合
///関数宣言///function 関数名（仮引数,仮引数,...){
//                  処理;
//                  処理；
//                  return 返り値;
//              }
///実行・呼び出し///関数名（実引数,実引数,...);

//関数式を用いる場合
///関数式///const定数名 = function(仮引数,仮引数,...){
//                  処理;
//                  処理；
//                  return 返り値;
//              };     //文末にセミコロン;が必要になる
///実行・呼び出し///定数名（実引数,実引数,...);
//先の問題を関数式に書き換えた場合
// const sum =function sum(a, b, c) {
//     return a + b + c;
// };
// const total = sum(1, 2, 3) + sum(4, 5, 6); //21
// console.log(total);

//上の式を短く書くアロー関数
// const sum =(a, b, c) => a + b + c;
// const total = sum(1, 2, 3) + sum(4, 5, 6); //21
// console.log(total);

//アロー関数は引数が一つの場合省略できる
//    const double = function(a) {
//        return a * 2;
//    };
//    const double = a => a * 2;
//    console.log(double(12));

//定数や変数（ifでもwhileでも）のスコープ（有効範囲）
// const x = 2;   //ブロックの外でxを使いたい場合は{}の外で宣言する。全てに宣言している。ただ{}内で他に同名の宣言が重なる場合は、中の宣言が優先される。
// function f(){
//     const x = 1;       //この{}のブロックの間だけ定数xは１、ブロックの外には宣言していない
//     console.log(x);
// }
// f();
// console.log(x)

