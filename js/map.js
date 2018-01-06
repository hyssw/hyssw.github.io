<script type="text/javascript" charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script>
<div style="width:100%;height:500px" id="map"></div>
<script type="text/javascript">
function init() {
    //以纬度和经度表示的地理坐标点。
    var center= new qq.maps.LatLng(34.245747,108.885558);
    var map = new qq.maps.Map(
                              document.getElementById("map"),        //在id="map"的 HTML 容器中创建新的地图
                              {
                              center:center,                    //初始的地图中心
                              zoom: 14                        //地图等级
                              }
                              );
    var marker = new qq.maps.Marker({        //创建一个标注
                                    position: center,                    //标注所在位置的地理坐标点，必填
                                    map: map                            //待显示标记的地图
                                    });
    var label = new qq.maps.Label({
                                  map: map,
                                  content: '宇宙中心',
                                  offset: new qq.maps.Size(-120, 0),
                                  position: center
                                  });
}
init();
</script>