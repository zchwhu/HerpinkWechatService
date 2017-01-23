/**
 * Created by Administrator on 2016/6/3.
 */
$(document).ready(function(){
    //选中类别显示效果
    $("#category>div").click(function(){
        var $index=$(this).index();
        if($(this).siblings().find("span").hasClass("selected")){
            $(this).siblings().find("span").removeClass("selected");
            $("#activitySelect>div").css({"display":"none"});
            $("#activitySelect").css({"display":"none"});
        }
        if($("#activitySelect").is(":hidden")){
            $(this).find("span").addClass("selected");
            $("#activitySelect>div").eq($index).show();
            $("#activitySelect").slideDown();
        }else{
            $(this).find("span").removeClass("selected");
            $("#activitySelect>div").eq($index).hide();
            $("#activitySelect").css({"display":"none"});
        };
    });

    //选中文本显示效果
    $("#activitySelect label").click(function(){
        $(this).find("p").addClass("selected").parents("label").siblings().find("p").removeClass("selected");
        var $text=$(this).find("p").text();
        var $index2=$(this).parents(".weui_cells_radio").index();
        $(".weui-col-25").eq($index2).find(".type").text($text);
        //将所选内容写入表单
        switch($index2){
            case 0:
                $("input[name='type']").val($text);
                break;
            case 1:
                $("input[name='area']").val($text);
                break;
            case 2:
                $("input[name='multiple']").val($text);
                break;
            case 3:
                $("input[name='filter']").val($text);
                break;
        }
    });

    //搜索框显示效果
    $("#search").click(function(){
        if($(".bd").is(":hidden")){
            $(".bd").show();
            $("#category").css({"top":"86px"});
            $("#activityList").css({"margin-top":"124px"});
        }else{
            $(".bd").hide();
            $("#category").css({"top":"42px"});
            $("#activityList").css({"margin-top":"80px"});
        }
    });

    //垂直居中显示
    //$height=$(window).width()*0.2;
    //$("#content #activityList li").height($height);
    //$marginTop=($("#content #activityList li").height()-$("#content #activityList li a").height())/2;
    //$("#content #activityList li a").css({
    //    "margin-top":$marginTop
    //})

    var loading=false;
    $(document).scroll(function(){
        if ($(this).scrollTop() + $(window).height() >= $(document).height() && $(this).scrollTop() > 0){
            if(loading) return;
            loading = true;
            setTimeout(function() {
                $("#activityList").append("<p> 我是新加载的内容 </p>");
                //alert("h");
                loading = false;
            }, 500);   //模拟延迟
        }
    })
})

$(document).ready(function(){
    var $condition1,$condition2,$condition3,$condition4;
    if($condition1!==""){
        $("#"+$condition1).attr("checked","checked");
        $("input[name='eventCls']").val($("#"+$condition1).val());
    }
    if($condition2!==""){
        $("#"+$condition2).attr("checked","checked");
        $("input[name='eventArea']").val($("#"+$condition2).val());
    }
    if($condition3!==""){
        $("#"+$condition3).attr("checked","checked");
        $("input[name='eventSort']").val($("#"+$condition3).val());
    }
    if($condition4!==""){
        $("#"+$condition4).attr("checked","checked");
        $("input[name='eventPay']").val($("#"+$condition4).val());
    }
})
