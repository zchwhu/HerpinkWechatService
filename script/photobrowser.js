/**
 * Created by Administrator on 2016/6/9.
 */
window.onload=function(){
    //遍历文档中的图片获取图片路径
    var photoList=new Array();
    $("img").each(function(){
        if(!$(this).hasClass("commentUserHead")&&!$(this).hasClass("topicUserHead")){
            photoList.push($(this).attr("src"));
        }
    })

    //初始化图片浏览器
    var pb1 = $.photoBrowser({
        items: photoList,
        onSlideChange:
            function(index) {
                console.log(index);
            },
        onOpen:
            function() {
                console.log(this);
            },
        onClose:
            function() {
                console.log(this);
            }
    });

    //打开图片浏览器
    $("img").click(function(){
        if(!$(this).hasClass("commentUserHead")&&!$(this).hasClass("topicUserHead")){
            pb1.open();
        }
    })
}