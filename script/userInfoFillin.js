/**
 * Created by Administrator on 2016/5/27.
 */
$(document).ready(function(){
    //配置选择框内容
    $("#age").select({
        title: "选择年龄段",
        items: ["青葱年华 18~23", "花样年华 24~29", "桃李年华 30~35", "蕙质兰心 36~40", "风华正茂 41~45", "风韵犹存 45以上"]
    });
    $("#constellation").select({
        title:"选择星座",
        items:["白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"]
    });
    $("#area").select({
        title:"选择地区",
        items:["江岸区","江汉区","硚口区","汉阳区","武昌区","青山区","洪山区","东西湖区","蔡甸区","江夏区","黄陂区","新洲区","汉南区"]
    });
    $("#job").select({
        title:"选择职业",
        items:["互联网/ＩＴ","采购","贸易／进出口","医生／护士","市场／营销","房地产开发","资讯顾问","酒店/旅游","家政服务",
            "翻译","美容/保健","机械人员","行政/文职","广告","影视","设计","公关","文字媒体","建筑/工程","人力资源","律师/法务",
            "教育","销售员","中介","后勤人员","作家","税务","证券/金融/投资","会计","品质管理","汽车制造/维修","服装/纺织","物流/仓储/运输","其他"]
    });
    $("#in").select({
        title:"选择兴趣",
        multi:"true",
        items:["上网","听音乐","养小动物","摄影","旅游","做园艺","跳舞","看展览","购物","写作","绘画","研究计算机"]
    });

    //选中后修改文字颜色
    $("input[type='text']").change(function(){
        $(this).css({"color":"#3D4145"});
    });

    $(document).on("click", "#post", function() {
        if($("#age").val().length==0){
            $(".info.error p").text("请选择年龄");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#constellation").val().length==0){
            $(".info.error p").text("请选择星座");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#area").val().length==0){
            $(".info.error p").text("请选择区域");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#job").val().length==0){
            $(".info.error p").text("请选择职业");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#area").val().length==0){
            $(".info.error p").text("请选择区域");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#in").val().length==0){
            $(".info.error p").text("请选择兴趣");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else{
            $(".info.success").fadeIn("fast");
            setTimeout(function(){
                $(".info.success").fadeOut();
            },2000);
            return true;
        }
    });

})
