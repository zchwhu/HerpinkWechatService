/**
 * Created by Administrator on 2016/6/7.
 */
$(document).ready(function(){
    $(".weui-col-15").click(function(){
        if($(this).hasClass("clicked")){
            $(this).removeClass("clicked");
            $(this).text("ϲ��");
        }else{
            $(this).addClass("clicked");
            $(this).text("��ϲ��");
        }
    })
})