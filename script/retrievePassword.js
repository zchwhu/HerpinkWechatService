/**
 * Created by Administrator on 2016/7/14.
 */
$(document).ready(function(){
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
        var $phonenum=$("#retrievePassword input[name=phonenum]");
        var $password=$("#retrievePassword input[name=password]");
        var $captcha=$("#retrievePassword input[name=captcha]");
        var $confirmpassword=$("#retrievePassword input[name=confirmpassword]");
        var $checkbox=$("#retrievePassword input[type='checkbox']");
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
        }else{
            $.alert("������������ɹ�","");
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

})