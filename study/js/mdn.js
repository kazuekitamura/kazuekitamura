// {
// // const score1 = 80;
// // const score2 = 90;
// // const score3 = 100;配列を

// const scores =[80, 90, 40];
//     console.log(scores);
// }

// {
//部分的に要素を取り出す
// const scores =[80, 90, 40];
        // console.log(scores[1]);
     //要素の変更
    //  scores[2] = 44;    
    //  console.log(scores);
// console.log(scores.length);
// }

//配列とループ処理
// {
// const scores =[80, 90, 40, 70];
// console.log(`Score: ${scores[0]}`);
// console.log(`Score: ${scores[1]}`);
// console.log(`Score: ${scores[2]}`);

//処理が多い場合forを使うと短くかける
// for(let i =0; i <3; i++) {
//配列の要素が変化する場合,lengthを使う
// for(let i =0; i< scores.length; i++){ 
//     console.log(`Score: ${scores[i]}`);
// }
// }
//要素が何番目かも示す
// for(let i =0; i< scores.length; i++){ 
//     console.log(`Score ${i}: ${scores[i]}`);
// }
// }
//配列の要素を変更する　要素の先頭に足す場合unshift,末尾に足すpush,
//要素の先頭を削除する場合shift、末尾を削除する場合pop
// {
//     const scores =[80, 90, 40, 70];
//     scores.push(60, 50);//末尾に60、50がたされる
//     scores.shift(); //先頭80が削除される（削除は一つづつ）
// for(let i =0; i< scores.length; i++){ 
//     console.log(`Score ${i}: ${scores[i]}`);
// }
// }
//spliceには（変化が開始する位置、削除数,追加する要素）
// {
//     const scores =[80, 90, 40, 70];
//     scores.splice(1, 1, 40, 50);
// for(let i =0; i< scores.length; i++){ 
//     console.log(`Score ${i}: ${scores[i]}`);
// }
// }

//スプレッド構文  要素を追加したいときに...を使うことで別の配列を展開してくれる
// {
//     const otherScores =[10,20];
//     const scores =[80, 90, 40, 70,...otherScores];
//     // console.log(scores);

//     function sum(a, b) {
//         console.log(a + b);
//     }
//     sum(...otherScores);
// }

//分割代入から

//要素すべてをforEachで表示。numberやindex(なんでもいい)の引数を渡して要素の順番を取得
// {
//     const scores =[80,90,40,70];
//     scores.forEach((score,number) => {    
//     console.log(`Score:${number}: ${score}`);
//     });
// }

// {
//     const prices = [180,190,200];
//配列の要素に今回は＋20して別の配列を作りたいとはmap()を使う
    // const updatedPrices = prices.map((price) => {
    //     return price +20;
    // });

   //上記を省略した形returnの一行の場合は省略できる。
//     const updatedPrices = prices.map(price => price +20);
//     console.log(updatedPrices);
// }

// {
//     const numbers =[1,4,7,8,10];

//     const evenNumbers = numbers.filter((number =>{
//         if(number %2)
    
//     })
// }
//オブジェクト形式{ }に書く
// {
//     const point ={
//         x: 100,
//         y: 180,
//     };
// //値を代入
//     point.x =120;
    
//     // console.log(point.x);
//     // console.log(point['y']);
// //プロパティの追加と削除
//     point.z =90;
//     delete point.y;
//     console.log(point);
// }


// {
//     const otherProps = {
//         r:4,
//         color:"red",
//     }
//     const point ={
//         x: 100,
//         y: 180,
//         ...otherProps
//     };
//     // console.log(point);
//     //一部のプロパティだけオブジェクトからとりだす
//     const{x,r,...others} =point;
//     console.log(x);
//     console.log(r);
//     console.log(others);
// }

// {
// const point ={
//     x: 100,
//     y: 180,
// };
//keyを配列で取得する
//  const keys = Object.keys(point);
//  keys.forEach(key => {
//      console.log(`Key: ${key} value: ${point[key]}`);
//  })

// const points = [
//     { x:30, y:20},
//     {x:10, y:50},
//     {x:40, y:40},
// ];
// console.log(points[1]);
// }

//値そのものを代入される
// {
//  let x =[1,2];
//  let y =[...x];
//  x[0] =5;
//  console.log(x);
//  console.log(y);
// }

// {
//     const str ='hello';
//     // console.log(str.length);
//     console.log(str.substring(2,4));
    
// }

