const db = firebase.database();



// 1. 自分のIDをローカルストレージから取得"h1"に名前が入る
const myUserId = localStorage.getItem('userId');
document.querySelector('h1').textContent = myUserId;

// 2. ログアウト//ローカルストレージからデータ削除で誰がログインしていたか忘れる
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('userId');
    window.location.href = 'index.html'
    alert('ログアウトしました');
  });
  

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    // const result = document.getElementById('result');
    
    const scoreComment = document.querySelector('#scoreComment');
    const awards = document.querySelector('#awards');
    const quizSet = shuffle([
        {q: 'ジョーの代名詞は？', c: ['けんか屋', 'お米屋', '居酒屋']},
        {q: 'ジョーが丹下団平から受けたボクシングの指導方法で当てはまらないものはどれか？', c: ['睡眠学習', 'マンツーマンレッスン', '通信教育']},
        {q: 'ジョーはある方法で少年院を脱走しようと試みました。その方法とは？', c: ['豚の大群に乗って門を突破する', '峰不二子が逃走を手伝う', 'ウッディが助けにくる']},
    ]);
        let currentNum = 0;
        let isAnswered;
        let score = 0;
        
        //選択肢をランダムにシャッフルする
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }
        //正誤判定をする
    function checkAnswer(li) {
        //回答済みの場合は以降の正誤判定をしない
        //if (isAnswered === true) は下記へ省略できる
    if (isAnswered) {
        return;
    }
        isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
        li.classList.add('correct');
        score++;//一つ正解でscoreを１づつ増やす
    } else {
        li.classList.add('wrong');
    }
        //次の問題に進めるようにする
    btn.classList.remove('disabled');
    }
    
    function setQuiz() {
        isAnswered = false;
        //HTMLに問題と選択肢をうめる
        question.textContent = quizSet[currentNum].q;
        //処理済みの問題を消す
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
     }
        //シャッフルを実行するshuffledChoicesという名前に変更して関数に大元の選択肢を渡す
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        //liをクリックした時に実行される
        li.addEventListener('click', () => {
        checkAnswer(li);
    });
        choices.appendChild(li);
    });
        //最後の問題だったらボタンのテキストをかえる
    if (currentNum === quizSet.length - 1) {
        btn.textContent = 'Show Score';
    }
    }
        //関数を呼び出す
    setQuiz();
        //クリックしたら次の問題と選択肢を表示する
    btn.addEventListener('click', () => {
        //問題が選択されていない場合次へボタンを無効にする
    if (btn.classList.contains('disabled')) {
        return;
    }
        //ボタンの色を戻す
    btn.classList.add('disabled');
    
        //最後の問題だったらスコアの表示をする
     if (currentNum === quizSet.length - 1) {
        //スコアを表示するところでhiddenクラスを外す
        result.classList.remove('hidden');
        //リザルトとコンソールに今回のスコアを表示する
        console.log(`Score: ${score} / ${quizSet.length}`);
        const scoreLabel = document.querySelector('#result p');
        scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`; 

    //日時を取得
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
        console.log(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']');
    // DBに送るデータを作成
    const myUserId = localStorage.getItem('userId');
    const scoreData = {
        score: score,
        date: year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']',
            time: hour + '時' + minute + '分' + second + '.' + millisecond + '秒',
            time: hour + '時' + minute + '分' + second + '.' + millisecond + '秒'
    };
    db.ref('/users/'+ myUserId+ '/scores/').push(scoreData);

    //スコアによってコメントを表示する
    if (score == 3) {
    $('#scoreComment').html("あんたがチャンピオン");
    } else if (score == 2) {
    $('#scoreComment').html("プロボクサー合格だな");
    } else if (score == 1) {
    $('#scoreComment').html("練習生だな");
    } else {
    $('#scoreComment').html("ド素人だな");
    }

    
  //スコアデータの読み込み
    db.ref('/users/' + myUserId+ '/scores/').on('child_added', function(snapshot) {   
    const data = snapshot.val();
    const score = data.score;
    console.log(score);

    
    //1,スコアの合計がでない
    let sum  = function(score) {  
        let sum = 0;
        for (i=0,len=score.length; i<len; ++i) {
            sum += score[i];
        };
        return sum;
    };
    console.log(sum(score));

    //リザルトに表示
    let html = document.getElementById('list2').innerHTML;
    html += '<div>' + score + '</div>';
    document.getElementById('list2').innerHTML = html;
    });

    } else if (currentNum === quizSet.length - 1) { 
    } else {
    currentNum++;
    setQuiz();
    }
    });
    
    // 自分のIDをローカルストレージから取得リザルト"h２"に名前が入る
    const myUserId = localStorage.getItem('userId');
    document.querySelector('h2').textContent = myUserId;
          
    //練習に戻る クリックイベント
    $("#return").on("click",function(){
        window.location.href = 'quiz.html';
    });

    //clear クリックイベントでスコアデータは非表示となるが、DBのデータは削除されないため、再ログインでスコアデータが再表示される。
    document.getElementById('clear').addEventListener('click',  function() {
        db.ref('/users/'+ myUserId+ '/scores/').remove();
        alert('スコアデータを削除したよ！');
    });

    

    
    
    //リザルトが開く
    }
    const button = document.getElementById('hook');
    const panel = document.getElementById('panel');
    let height = 0;
    
    button.addEventListener('click', function () {
      if (panel.hidden) {
        panel.hidden = false;
        height = panel.clientHeight;
        panel.style.height = 0;
        panel.clientHeight; // CSSOMの再計算
        panel.style.height = height + 'px';
      } else {
        height = panel.clientHeight;
        panel.style.height = height + 'px';
        panel.clientHeight; // CSSOMの再計算
        panel.hidden = true;
      }
    
      this.textContent = panel.hidden ? 'リザルトを開く' : 'リザルトを閉じる';
    });
    panel.addEventListener('transitionend', function () {
      panel.style.height = '';
    });
    
    
    