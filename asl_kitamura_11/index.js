// 新規登録画面の切替
function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
     document.getElementById("firebaseui-auth-container").style.visibility="hidden";
 }
 
 // ログイン画面切替
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
     document.getElementById("firebaseui-auth-container").style.visibility="visible";
 }
 
 // Google認証
   var ui = new firebaseui.auth.AuthUI(firebase.auth());
 
   var uiConfig = {
     callbacks: {
       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
         return true;
       },
       uiShown: function() {
         document.getElementById('loader').style.display = 'none';
       }
     },
     signInFlow: 'popup',
     signInSuccessUrl: 'mypage.html',
     signInOptions: [
   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   firebase.auth.EmailAuthProvider.PROVIDER_ID,
 ],
   };
   ui.start('#firebaseui-auth-container', uiConfig);
 
   
const db = firebase.database();

// アカウント作成
document.getElementById('signup').addEventListener('click', function() {
  // inputタグのところにユーザが入力した値を取得する
  const myUserId = document.getElementById('user_id').value;
  const myUserPassword = document.getElementById('user_password').value;
  // すでに使用されているIDと同一のものを登録させないようにチェック
  db.ref('/users/' + myUserId).once('value', snapshot => {
    if (snapshot.exists()) {// 同一IDが存在している場合（=NGな場合）
      alert('そのユーザIDは使えません');
    } else { // 同一IDが存在しない場合（=OKな場合）
      // 登録データを作成
      const data = {
        userPassword: myUserPassword
      };
      // DBに登録
      db.ref('/users/' + myUserId).set(data);
      // ローカルストレージにユーザIDを格納
      localStorage.setItem('userId', myUserId);
      // 登録後は自動で画面遷移させる
      window.location.href = 'mypage.html'
    };
  });
});

// ログイン
document.getElementById('login').addEventListener('click', function() {
  // inputタグのところにユーザが入力した値を取得する
  const loginId = document.getElementById('login_id').value;
  const loginPassword = document.getElementById('login_password').value;
  // 入力されたloginIdでDBを検索する
  db.ref('/users/' + loginId).once('value', snapshot => {
    if (snapshot.exists()) {
      const myUserId = snapshot.key;
      const data = snapshot.val();
      const myUserPassword = data.userPassword;
      if (loginId == myUserId &&
          loginPassword == myUserPassword) {
        localStorage.setItem('userId', myUserId);
        window.location.href = 'mypage.html'
      } else {
        alert('残念でしたʕ◔ϖ◔ʔ');
      };
    } else {
      alert('残念でしたʕ◔ϖ◔ʔ');
    };
  });
});
