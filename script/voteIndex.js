/**
 * Created by Administrator on 2016/6/5.
 */
$(document).ready(function(){
    //tab�л�Ч��
    $("#tab>div").click(function(){
        var $index=$(this).index();
        $(this).addClass("selected")
                .siblings().removeClass("selected");
        $("#contentMain>div").eq($index).show()
                .siblings().hide();
    })
})

$(document).on("click","#all li button",function(){
    //ͨ��clicked���ʶ�Ƿ��ѱ������
    if($(this).hasClass("clicked")){
        $.alert("�������Ѿ��ͳ������һƱ������������Ŷ");
    }else{
        $.alert("ͶƱ�ɹ���");
        $(this).addClass("clicked");
        //��ȡ��ǰͶƱͼƬ�ı��
        var num=$(this).parent().prev().prev().find("span").text();
        //�ж�ͶƱ��¼���Ƿ���ڸü�¼�����������򽫸ýڵ㸴��һ�ݲ��뵽ͶƱ��¼��
        if(!findRecord(num)){
            $clone=$(this).parents("li").clone(true);
            $clone.find("button").text("�ٴ�֧��");
            $clone.appendTo("#record ul");
        }
    }


    function findRecord(num){
        var hasRecord=false;
        $("#record ul li").each(function(){
            var record=$(this).find(".weui-row").find("div:first-child").find("span").text();
            if(record==num){
                alert(record);
                hasRecord=true;
            }
        });
        return hasRecord;
    }
})

$(document).on("click","#record li button",function(){
    if($(this).hasClass("clicked")){
        $.alert("�������Ѿ��ͳ������һƱ������������Ŷ");
    }else{
        $.alert("ͶƱ�ɹ���");
        $(this).addClass("clicked");
    }
})