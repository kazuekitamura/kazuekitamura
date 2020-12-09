$("#chat-button").on("click",function(){
  const uname = $("#uname").val();
    const text  = $("#chatinput").val();
    let d = new Date();
    console.log(d.toString());
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayofweek = d.getDay();
      const dayname = ['日','月','火','水','木','金','土'];
      console.log(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']');
      console.log(d.toString());
      let hour = d.getHours();
      let minute = d.getMinutes();
      let second = d.getSeconds();
      let millisecond = d.getMilliseconds();
      console.log(hour + '時' + minute + '分' + second + '.' + millisecond + '秒');
      console.log(uname+text+year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']');
      const msg = {
        uname: uname,
        text: text,
        date: year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']',
        time: hour + '時' + minute + '分' + second + '.' + millisecond + '秒'
    };
    ref.push(msg); //firebase関数
});

//送信処理
$("#chat-button").on("click",function(){
    const uname = $("#uname").val();
    const text = $("#chatinput").val();
    const lat = $("#lat").val();
    const lon = $("#lon").val();
    const msg = {
        uname: uname,
        text: text,
    };
    ref.push(msg);
});

$("#chatinput").on("keydown",function(e){
    console.log(e);
    if(e.keyCode==13){
      const uname = $("#uname").val();
      const text = $("#chatinput").val();
    //   const lat = $("#lat").val();
    // const lon = $("#lon").val();
      const msg = {
          uname: uname,
          text: text,
      };
      ref.push(msg);
    }
});

// 受信処理
ref.on("child_added",function(data){
    const v = data.val();
    const k = data.key;
    const h = '<p>'+v.uname+'<br>'+v.text+'<br>'+v.date+'<br>'+v.time+'</p>';
    $("#output").append(h).animate(
      { scrollTop: $("#output").get(0).scrollHeight },
  );;
});

// ロボットの返答内容
const chat = [
  'Hi! ジーズ山にようこそ!',
  'お名前を教えてください ',
  '気をつけていってらっしゃい！',
  [['Alright !'], ['Oh really!'], ['Ok!']]// ランダムな返答
];


// ロボットの返信の合計回数（最初は0）
// これを利用して、自分が送信ボタンを押したときの相手の返答を配列から指定する
let chatCount = 0;


// 画面への出力
// valはメッセージ内容，personは誰が話しているか
function output(val, person) {
  // 一番下までスクロール
  const field = document.getElementById('field');
  field.scroll(0, field.scrollHeight - field.clientHeight);

  const ul = document.getElementById('chat-ul');
  const li = document.createElement('li');
  // このdivにテキストを指定
  const div = document.createElement('div');
  const imgs = document.getElementById('c-imgs');
  div.textContent = val;
  
  if (person === 'me') { // 自分
      div.classList.add('chat-right');
      li.classList.add('right');
      ul.appendChild(li);
      li.appendChild(div);
  }else if (person === 'robot') { // 相手
      // ロボットが2個連続で返信してくる時、その間は返信不可にする
      // なぜなら、自分の返信を複数受け取ったことになり、その全てに返信してきてしまうから
      // 例："Hi!〇〇!"を複数など
      // （今回のロボットの連続返信は2個以内とする）
      chatBtn.disabled = true;
      setTimeout( ()=> {
          chatBtn.disabled = false;
          li.classList.add('left');
          div.classList.add('chat-left');
          ul.appendChild(li);
          li.appendChild(div);
          // ロボットのトークの合計数に1足す
          chatCount++;
      }, 2000); 
  }
}


const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chatinput');

// 送信ボタンを押した時の処理
function btnFunc() {
  if (!inputText.value) return false;
  // 自分のテキストを送信
  output(inputText.value, 'me');

  setTimeout( ()=> {
      // 入力内を空欄にする
      // 一瞬の間でvalueを取得し、ロボットの"Hi!〇〇!"の返信に利用
      // 送信ボタンを押した瞬間にvalueを消したら、やまびこに失敗した
      inputText.value = '';
  }, 1);

  //ロボットの送信の合計回数に応じて次の返信を指定
  switch(chatCount) {
      // もしロボットのトーク数が2個の時に送信ボタンが押されたら、
      // 名前のやまびこと、chat配列の2（3個目）が返信
      case 2:
          output('Hi, ' + inputText.value + ' !', 'robot');
          setTimeout( ()=> {
              output(chat[2], 'robot');
          }, 2000);
          break;
      
      // もしロボットのトーク数が4個の時に送信ボタンが押されたら、
      // chat配列の3（4個目）のランダム番目が返信
      case 4:
          output(chat[3][Math.floor(Math.random() * chat[3].length)], 'robot');
          break;
      
      // それ以降はやまびこ
      default:
          output(inputText.value, 'robot');
          break;
  }
}

// 最初に2つロボットから話しかけられる
output(chat[0], 'robot');

setTimeout( ()=> {
  output(chat[1], 'robot');
}, 2000);

// 絵文字
$("#c-img1").on("click",function(){
$("#c-img2").show();
});

$("#c-img2").on("click",function(){
$("#c-img3").show();
});