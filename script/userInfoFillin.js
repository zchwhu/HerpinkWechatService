/**
 * Created by Administrator on 2016/5/27.
 */
$(document).ready(function(){
    //����ѡ�������
    $("#age").select({
        title: "ѡ�������",
        items: ["����껪 18~23", "�����껪 24~29", "�����껪 30~35", "ޥ������ 36~40", "�绪��ï 41~45", "�����̴� 45����"]
    });
    $("#constellation").select({
        title:"ѡ������",
        items:["������","��ţ��","˫����","��з��","ʨ����","��Ů��","�����","��Ы��","������","Ħ����","ˮƿ��","˫����"]
    });
    $("#area").select({
        title:"ѡ�����",
        items:["������","������","�~����","������","�����","��ɽ��","��ɽ��","��������","�̵���","������","������","������","������"]
    });
    $("#job").select({
        title:"ѡ��ְҵ",
        items:["������/�ɣ�","�ɹ�","ó�ף�������","ҽ������ʿ","�г���Ӫ��","���ز�����","��Ѷ����","�Ƶ�/����","��������",
            "����","����/����","��е��Ա","����/��ְ","���","Ӱ��","���","����","����ý��","����/����","������Դ","��ʦ/����",
            "����","����Ա","�н�","������Ա","����","˰��","֤ȯ/����/Ͷ��","���","Ʒ�ʹ���","��������/ά��","��װ/��֯","����/�ִ�/����","����"]
    });
    $("#in").select({
        title:"ѡ����Ȥ",
        multi:"true",
        items:["����","������","��С����","��Ӱ","����","��԰��","����","��չ��","����","д��","�滭","�о������"]
    });

    //ѡ�к��޸�������ɫ
    $("input[type='text']").change(function(){
        $(this).css({"color":"#3D4145"});
    });

    $(document).on("click", "#post", function() {
        if($("#age").val().length==0){
            $(".info.error p").text("��ѡ������");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#constellation").val().length==0){
            $(".info.error p").text("��ѡ������");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#area").val().length==0){
            $(".info.error p").text("��ѡ������");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#job").val().length==0){
            $(".info.error p").text("��ѡ��ְҵ");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#area").val().length==0){
            $(".info.error p").text("��ѡ������");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#in").val().length==0){
            $(".info.error p").text("��ѡ����Ȥ");
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
