/**
 * Created by Administrator on 2016/6/12.
 */
var loading = false;  //状态标记
$(document.body).infinite().on("infinite", function() {
    if(loading) return;
    loading = true;
    setTimeout(function() {
        $("#content").append("<p> 我是新加载的内容 </p>");//设置滚动加载内容
        loading = false;
    }, 1500);   //模拟延迟
});