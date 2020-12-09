const db = firebase.database();
  
 // 検索メニュー  
 $(function () {
    searchWord = function(){
      var searchText = $(this).val(), // 検索ボックスに入力された値
          targetText;
  
      $('.target-area li').each(function() {
        targetText = $(this).text();
  
        // 検索対象となるリストに入力された文字列が存在するかどうかを判断
        if (targetText.indexOf(searchText) != -1) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });
    };
    // searchWordの実行
    $('#search-text').on('input', searchWord);
  });


  function initMap() { 
    // 地図を生成して表示
    var map = new google.maps.Map(document.getElementById("gmap"), {
      zoom: 12,
      center:{lat: 35.17380, lng: 139.0291 },
      mapTypeId: "roadmap"
    });

  
  //マップのイベント
  google.maps.event.addListener(map, 'click', function(e) {
    var marker = new google.maps.Marker({
      position: e.latLng,  //イベントの発生した緯度・経度（位置）
      map: this,  //this は map を意味します
      title:"Empire!",
      animation: google.maps.Animation.DROP

    });

    var infoWindow = new google.maps.InfoWindow({
      content: e.latLng.toString() //イベントの発生した位置を toString() で文字列に変換
    });
 
    //マーカーのイベント
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker); //marker の位置に情報ウィンドウを表示
    });
 
    //情報ウィンドウののイベント
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
      marker.setMap(null);  //マーカーを削除
    });
  });
  }

  var map;
  function initMap() {
    var target = document.getElementById('gmap');
    var empire = {lat: 36.318300, lng: 137.683467};
    map = new google.maps.Map(target, {
      center: empire,
      zoom: 11
    });
    //クマに注意：マーカーとコメントを表示
    var marker = new google.maps.Marker({
      position: empire,
      map: map,
      title: "Empire !",
      animation: google.maps.Animation.DROP,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/micons/yellow-dot.png",
        scaledSize: new google.maps.Size(30, 30)
      },
      label: {
        text: "クマに注意!" ,
        color: "Red" ,
        fontSize: "16px" ,
        fontWeight: "bold"
      }
    });
    // 情報ウインドウを表示
    var infoWindow = new google.maps.InfoWindow({
    position: map.getCenter(),
    content: document.getElementById('infowindw_1')
  });
  // マップにコメント
  infoWindow.open(map);


  //紅葉：マーカーとコメントを表示
  var marker = new google.maps.Marker({
    position: {lat: 36.2913, lng: 137.6651},
    map: map,
    title: "Empire !",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "https://maps.google.com/mapfiles/ms/micons/red-dot.png",
      scaledSize: new google.maps.Size(30, 30)
    },
    label: {
      text: "紅葉が見頃!" ,
      color: "blueviolet" ,
      fontSize: "16px" ,
      fontWeight: "bold"
    }
  });
  // 情報ウインドウを表示
  var infoWindow = new google.maps.InfoWindow({
  position: {lat: 36.2913, lng: 137.6651} ,
  content: document.getElementById('infowindw_2')
});
// マップにコメント
infoWindow.open(map);
  }




  





  

  