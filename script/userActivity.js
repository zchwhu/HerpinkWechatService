/**
 * Created by Administrator on 2016/5/28.
 */
window.onload=function(){
    //��λͼƬλ��
    $height1=$(window).height();
    $height2=$("img").height();
    $height3=$("#info").height();
    $marginTop=($height1-$height2-$height3)/2-74;
    $("img").css({"margin-top":$marginTop+"px"});

    //�л�tabЧ��
    $(".weui-col-50").click(function(){
        $(this).find("p").addClass("selected");
        $(this).siblings().find("p").removeClass("selected");
        $index=$(this).index();
        $("#info p").eq($index).show().siblings("P").hide();
    })
}