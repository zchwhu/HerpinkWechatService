/**
 * Created by Administrator on 2016/6/25.
 */
window.onload=function(){
    //ҳ�����Ч��
    $marginTop=($(window).height()-$("#ageSelect").height())/2;
    $("#ageSelect").css({"margin-top":$marginTop});
    setTimeout(function(){
        $("#introduce").animate({marginTop:"-=151px"},3000,function(){
            $("#ageSelectItem").slideDown("slow");
        })
    },1000)

    //�������ע��ҳ��Ч��
    $("#ageSelectItem a").click(function(){
        $("#ageSelect").fadeOut("slow",function(){
            $(document.body).css({"background":"#FFFFFF"});
            $("#register").fadeIn("slow");
        });
    })

    //��ѡ��Ч��
    $(".radioclass").click(function(){
        $(this).find("span").addClass("on")
            .find("input").attr("checked","checked");
        $(this).siblings(".radioclass").find("span").removeClass("on")
            .find("input").removeAttr("checked");
    })

    //������֤����ʱЧ��
    $("#msgValidation a").click(inMsgValidation);
    var time=0;
    var countTimer=null;
    function inMsgValidation(){
        time=5;
        $("#msgValidation a").addClass("inMsg");
        $("#msgValidation a").unbind("click");
        $("#msgValidation a").text(time+"������»�ȡ");
        countTimer=setInterval(Timer,1000);

    }
    function Timer(){
        time--;
        if(time>=0){
            $("#msgValidation a").text(time+"������»�ȡ");
        } else if(time<0){
            clearInterval(countTimer);
            $("#msgValidation a").removeClass("inMsg");
            $("#msgValidation a").text("�����ȡ��֤��");
            $("#msgValidation a").bind("click",inMsgValidation);
        }
    }

    //ע�����Ϣ��֤
    $("form").submit(function(){
        var pattern= /^[0-9]*$/;
        var $phonenum=$("#registerContent input[name=phonenum]");
        var $password=$("#registerContent input[name=password]");
        var $captcha=$("#registerContent input[name=captcha]");
        var $confirmpassword=$("#registerContent input[name=confirmpassword]");
        var $checkbox=$("#registerContent input[type='checkbox']");
        if($phonenum.val().length<11||!pattern.test($phonenum.val())){
            $.alert("��������ȷ��11λ�ֻ�����","");
            return false;
        }else if($captcha.val().length<6){
            $.alert("��������ȷ����֤��","");
            return false;
        }else if($password.val()==""){
            $.alert("����������","");
            return false;
        }else if($confirmpassword.val()==""){
            $.alert("��ȷ������","");
            return false;
        }else if($confirmpassword.val()!==$password.val()){
            $.alert("���벻һ�£�������ȷ������","");
            return false;
        }else if(!$checkbox.is(':checked')){
            $.alert("���Ķ���ͬ���û�Э��","");
            return false;
        }else{
            $.alert("��ϲ���ѳɹ�ע��Herpink��Ա","");
            return true;
        }
    })
    //���ֶ�ɾ������
    var $delete="<span class='delete'></span>";
    $(".msg input[type='text']").keyup(function(){
        if($(this).parent('div').find('span').length==0){
            $(this).parent('div').append($delete);
        }
    })

    $(document).on('click','.delete',function(){
        $(this).siblings('input').val('');
        $(this).remove();
    })
}