/**
 * Created by Administrator on 2016/6/9.
 */
$(document).ready(function(){
    $("form").submit(function(){
        var pattern= /^[0-9]*$/;
        if($("input[name='phone']").val().length==0){
            $.alert("请填写手机号码");
            return false;
        }else if($("input[name='phone']").val().length!==11||!pattern.test($("input[name='phone']").val())){
            $.alert("请填写正确的手机号码");
            return false;
        }else{
            $("#header button[type='submit']").hide();
            $("#header span").text("在线支付").css({"margin-left":0});
            $("#joinActivity").fadeOut(function(){
                $("#phoneNum span").text($("input[name='phone']").val());//支付页面显示的是用户上一步填写的手机号
                $("#payforActivity").fadeIn();
            });
            return false;
        }
    })
})