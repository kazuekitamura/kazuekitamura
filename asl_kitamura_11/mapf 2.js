//初期値
var map;
var marker = [];
var data = [];
var windows = [];
var currentInfoWindow = null;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), { //GoogleMapを呼び出す処理
    //GoogleMapの初期値を設定
    center: { lat: 38.6460251, lng: 140.3427782 }, //中心点（緯度・経度）
    zoom: 6.13, //拡大率
    clickableIcons: false, //GoogleMapの標準のクリック機能をOFFにする。
    // GoogleMapのスタイルを変更
    styles: [
      {
            "stylers": [
              { "visibility": "simplified" }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              { "hue": "#003bff" }
            ]
          },{
            "featureType": "road.highway",
            "stylers": [
              { "visibility": "off" }
            ]
          },{
            "featureType": "landscape",
            "stylers": [
              { "color": "#dbe8e5" }
            ]
          },{
        "featureType": "poi.park",
        "elementType": "labels.text",
            "stylers": [
              { "color": "#e6e6e6","visibility": "off" }
            ]
          },{
            "featureType": "water",
            "stylers": [
              { "color": "#8ecdf0" }
            ]
          },{
            "featureType": "transit.line",
            "stylers": [
              { "visibility": "off" }
            ]
          },{
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  });
  //お城情報を読み込み
  $.ajax({
    url: "castles.json",
    success: function (json) {
      for (var i = 0; i <= json.length - 1; i++) {
        data.push(
          {
            'location': json[i].location,
            'name': json[i].name,
            'lng': json[i].lng,
            'lat': json[i].lat,
            'pic': json[i].pic,
            'comment': json[i].comment
          }
        );
      };
      for (var i = 0; i < data.length; i++) {
        //吹き出しの追加
        markerLatLng = { lng: data[i]['lng'], lat: data[i]['lat'] };
        marker[i] = new google.maps.Marker({
          position: markerLatLng,
          map: map,
          icon: 'icon.png' //オリジナルのアイコン名
        });
        function markerEvent(i) {
          marker[i].addListener('click', function () { // マーカーをクリックしたとき
            //開いているウィンドウがある場合は閉じる
            if (currentInfoWindow) {
              currentInfoWindow.close();
            }
            windows[i].open(map, marker[i]); // 吹き出しの表示
            currentInfoWindow = windows[i];
          });
        }
        windows[i] = new google.maps.InfoWindow({ //吹き出しの中身
          content: '<p class="location">' + data[i]['location'] +'&nbsp;'+ data[i]['name'] + '</p><img class="pic" src="' + data[i]['pic'] + '"/><p>' + data[i]['comment'] + '</p></div>'
        });
        markerEvent(i); // マーカーにクリックイベントを追加
      }
    }
  });
  //ajax
}

[
  {
    "location": "青森県",
    "name": "弘前城",
    "lng": 140.4619917,
    "lat": 40.6074557,
    "pic": "./img/castle01.png",
    "comment": "歴史的な品位ある城とやぐら。2,600 本を超える桜の木、緑豊かな庭園、水堀に囲まれている。"
  }, {
    "location": "長野県",
    "name": "松本城",
    "lng": 137.9667664,
    "lat": 36.2386563,
    "pic": "./img/castle02.png",
    "comment": "黒い壁で知られる壮大な 16 世紀の城。歴史的な武器の展示がある。"
  }, {
    "location": "福井県",
    "name": "丸岡城",
    "lng": 136.269825,
    "lat": 36.1523361,
    "pic": "./img/castle03.png",
    "comment": "一向一揆の備えとして柴田勝家が甥の勝豊に1576年に築かせた平山城。歴代城主ゆかりの品を展示する歴史民俗資料館がある。"
  }, {
    "location": "愛知県",
    "name": "犬山城",
    "lng": 136.9335313,
    "lat": 35.3891543,
    "pic": "./img/castle04.png",
    "comment": "戦国時代にできた風格のある城。難攻不落の丘の上に建ち、木曽川を一望。"
  }, {
    "location": "滋賀県",
    "name": "彦根城",
    "lng": 136.2496573,
    "lat": 35.2764564,
    "pic": "./img/castle05.png",
    "comment": "17世紀建立の城。美しい庭園や博物館で知られ、一般向見学も実施。"
  }, {
    "location": "兵庫県",
    "name": "姫路城",
    "lng": 134.6897633,
    "lat": 34.8395982,
    "pic": "./img/castle06.png",
    "comment": "姫路を象徴する美しい城。1613 年頃の完成。白い城壁、連立式天守、堀、廊下、桜が有名。"
  }, {
    "location": "島根県",
    "name": "松江城",
    "lng": 133.0485046,
    "lat": 35.4751745,
    "pic": "./img/castle07.png",
    "comment": "堀尾吉晴が築城した五層の城。日本に現存する数少ない江戸時代の城の一つ。"
  }, {
    "location": "岡山県",
    "name": "備中松山城",
    "lng": 133.6202921,
    "lat": 34.809073,
    "pic": "./img/castle08.png",
    "comment": "標高約480メートルの臥牛山に建つ、現存する天守を擁する山城として国内一の高さを誇る近世城郭。天守、二重櫓、土塀は重要文化財指定。"
  }, {
    "location": "香川県",
    "name": "丸亀城",
    "lng": 133.7980924,
    "lat": 34.2859616,
    "pic": "./img/castle09.png",
    "comment": "標高約66mの亀山に築かれた平山城。本丸、二の丸、三の丸、帯曲輪、山下曲輪がある。日本の100名城にも選ばれた。"
  }, {
    "location": "愛媛県",
    "name": "伊予松山城",
    "lng": 132.5630103,
    "lat": 33.2194535,
    "pic": "./img/castle10.png",
    "comment": "公園の中に建つ 17 世紀の城。現在の城は復元されたもの。徒歩、リフト、ロープウェイのいずれかでアクセス。"
  }, {
    "location": "愛媛県",
    "name": "宇和島城",
    "lng": 132.5630103,
    "lat": 33.2194535,
    "pic": "./img/castle11.png",
    "comment": "鶴島城と呼ばれる秀麗な天守は、当時のまま現存する貴重なもの。"
  }, {
    "location": "高知県",
    "name": "高知城",
    "lng": 133.5292942,
    "lat": 33.5607211,
    "pic": "./img/castle12.png",
    "comment": "1603年に築城され、のちに修復された5階建ての城。城内には歴史的展示物や美術品、物見櫓がある。"
  }
]