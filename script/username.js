/**
 * Created by Administrator on 2016/6/23.
 */
$(document).ready(function(){
    $("form").submit(function(){
        var pattern= /^[0-9]*$/;
        if($("input[name='username']").val().length==0){
            $.alert("����д�����ǳ�");
            return false;
        }else{
            return true;
        }
    })
})