/**
 * Created by Administrator on 2016/6/9.
 */
$(document).ready(function(){
    $("form").submit(function(){
        var pattern= /^[0-9]*$/;
        if($("input[name='phone']").val().length==0){
            $.alert("����д�ֻ�����");
            return false;
        }else if($("input[name='phone']").val().length!==11||!pattern.test($("input[name='phone']").val())){
            $.alert("����д��ȷ���ֻ�����");
            return false;
        }else{
            $("#header button[type='submit']").hide();
            $("#header span").text("����֧��").css({"margin-left":0});
            $("#joinActivity").fadeOut(function(){
                $("#phoneNum span").text($("input[name='phone']").val());//֧��ҳ����ʾ�����û���һ����д���ֻ���
                $("#payforActivity").fadeIn();
            });
            return false;
        }
    })
})