/**
 * Created by Administrator on 2016/6/9.
 */
window.onload=function(){
    //�����ĵ��е�ͼƬ��ȡͼƬ·��
    var photoList=new Array();
    $("img").each(function(){
        if(!$(this).hasClass("commentUserHead")&&!$(this).hasClass("topicUserHead")){
            photoList.push($(this).attr("src"));
        }
    })

    //��ʼ��ͼƬ�����
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

    //��ͼƬ�����
    $("img").click(function(){
        if(!$(this).hasClass("commentUserHead")&&!$(this).hasClass("topicUserHead")){
            pb1.open();
        }
    })
}