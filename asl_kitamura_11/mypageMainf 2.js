// お友達検索からリストへ切替
function toggleList(){
  document.getElementById("search-toggle").style.backgroundColor="#fff";
   document.getElementById("search-toggle").style.color="#222";
   document.getElementById("list-toggle").style.backgroundColor="#57b846";
   document.getElementById("list-toggle").style.color="#fff";
   document.getElementById("search-form").style.display="none";
   document.getElementById("list-form").style.display="block";
}
// お友達リストから検索へ切替
function toggleSearch(){
   document.getElementById("search-toggle").style.backgroundColor="#57B846";
   document.getElementById("search-toggle").style.color="#fff";
   document.getElementById("list-toggle").style.backgroundColor="#fff";
   document.getElementById("list-toggle").style.color="#222";
   document.getElementById("list-form").style.display="none";
   document.getElementById("search-form").style.display="block";
}


const db = firebase.database();

// 2. 自分のIDをローカルストレージから取得
const myUserId = localStorage.getItem('userId');
document.querySelector('h1').textContent = myUserId;

// 3. ログアウト
document.getElementById('logout').addEventListener('click', function() {
  localStorage.removeItem('userId');
  window.location.href = 'index.html'
});

// 5. 友達検索する
document.getElementById('search').addEventListener('click', function() {
  const friendUserId = document.getElementById('friend_id').value;
  db.ref('/users/' + friendUserId).once('value', snapshot => {
    // 検索したユーザIDで取得できたか確認
    if (snapshot.exists()) {
      document.getElementById('search_result').textContent = friendUserId;
      document.getElementById('search_result').addEventListener('click', function() {
        const uniqueRoomId = Math.ceil(Math.random() * 100); // UUID生成のライブラリを使うなど、本当はもっとしっかりしたユニークIDを付与すべき
        // 相手のデータを、自分のところに登録
        const friendData = {
          roomId: uniqueRoomId
        };
        db.ref('/users/' + myUserId + '/friends/' + friendUserId).set(friendData);
        // 自分のデータを、相手のところに登録
        const myData = {
          roomId: uniqueRoomId
        };
        db.ref('/users/' + friendUserId + '/friends/' + myUserId).set(myData);
        // ２人のroomデータを作成
        const roomData = {
          users: {
            [myUserId]: true,
            [friendUserId]: true
          }
        };
        // ルームデータの登録
        db.ref('/rooms/' + uniqueRoomId).set(roomData);
      });
    };
  });
});

// 6. 友達一覧を表示する　　　なんらかの要素を追加（child_added）
db.ref('/users/' + myUserId + '/friends/').on('child_added', snapshot => {
  const friendId = snapshot.key;
  const data = snapshot.val();
  const roomId = data.roomId;
  const friends_list = document.getElementById('friends_list');
  const elem = document.createElement('div');
  console.log(elem);
  elem.textContent = friendId + ':' + roomId;
  elem.addEventListener('click', function() {
    localStorage.setItem('roomId', roomId);
    window.location.href = 'chat2.html';
  });
  friends_list.append(elem);
});



document.getElementById('.friend').addEventListener('click', function() {
  window.location.href = 'index.html'
});