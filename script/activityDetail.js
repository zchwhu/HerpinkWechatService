/**
 * Created by Administrator on 2016/6/7.
 */
$(document).ready(function(){
    //λ�þ���Ч��
    $marginTop=($("#activityInfo").height()-$("#activityJoin p").height()-18)/2;
    $("#activityJoin p").css({"margin-top":$marginTop});

    var $user="������";//�û���
    var $time=getCurrentTIme();//��ǰʱ��

    //ҳ�����ʱ�ж�������������,����������Ŀ���������Ϸ�д�벻ͬ��ʾ����
    var $commentNum=$("#commentArea ul li").length;
    if($commentNum==0){
        $("#commentArea>p").text("��ʱ��û��������Ŷ��������ɳ����");
    }else{
        $("#commentArea>p").text("����"+$commentNum+"������");
    }

    //�������Ч��
    $("#inputArea button").click(function(){
        $content=$("#inputArea input").val();
        if($content.length==0){
            $.alert("�ظ����ݲ���Ϊ��");
        }else{
            var $comment=$("<li><div class='comment'><img><div><p><span></span><span></span></p><p></p></div></div>");//���۽ڵ�
            $("#commentArea ul").append($comment);
            $("#commentArea ul li:last-child .comment div p:last-child").text($content);
            $("#commentArea ul li:last-child .comment div p:first-child span:first-child").text($user);
            $("#commentArea ul li:last-child .comment div p:first-child span:last-child").text($time);
            $("#commentArea ul li img").attr("src","img/userHeader.jpg");
            $("#inputArea input").val("");
            $commentNum++;
            $("#commentArea>p").text("����"+$commentNum+"������");
            //$(window).scrollTop($("#content").height());
        }
    })

    //��ӻظ�Ч��
    $(document).on("click",".reply button",function(){
        $replyContent=$(this).prev("input").val();
        if($replyContent.length==0){
            $.alert("�ظ����ݲ���Ϊ��");
        }else{
            var $comment=$("<li><div class='comment'><img><div><p><span></span><span></span></p><p></p></div></div>");//�ظ��ڵ�
            $replyName=$(this).prev("input").attr("placeholder").slice(0,-1);
            if(countNum($replyName,"�ظ�")>1){
                var $fulluserName=$user+$replyName.substring(0,$replyName.indexOf("�ظ�",$replyName.indexOf("�ظ�")+1));
            }else{
                var $fulluserName=$user+$replyName;
            }
            $parent=$(this).parents("li");
            $comment.insertAfter($parent);
            $parent.next("li").find(".comment").find("div").find("p:first-child").find("span:first-child").text($fulluserName);
            $parent.next("li").find(".comment").find("div").find("p:first-child").find("span:last-child").text($time);
            $parent.next("li").find(".comment").find("div").find("p:last-child").text($replyContent);
            $parent.next("li").find("img").attr("src","img/userHeader.jpg");
            $(this).prev("input").val("");
            $parent.find(".reply").remove();
            $commentNum++;
            $("#commentArea>p").text("����"+$commentNum+"������");
            //$(window).scrollTop($("#content").height());
        }
    })

    //�������������ӻظ���Ч��
    $(document).on("click",".comment",function(){
        //�ж��������Ƿ��лظ������û������ӣ����������ɾ��
        if($(this).siblings(".reply").length==0){
            //�������ۿ�ڵ�
            $reply=$("<div class='reply'><input type='text'><button>�ظ�</button></div>");
            //���ظ�����뵽��������֮��
            $reply.insertAfter($(this));
            //��ȡ���ظ��ߵ��û���
            $name=$(this).find("div").find("p").find("span:first-child").text();
            if(countNum($name,"�ظ�")==1){
               var $username=$name.substring(0,$name.indexOf("�ظ�"));
            }else{
               var $username=$name;
            }
            //���������ʾ�ظ���Ϣ
            $(this).siblings().find("input[type='text']").attr("placeholder","�ظ�"+$username+":");
            //�Ƴ����������µĻظ���
            $(this).parent().siblings().find(".reply").remove();
        }else{
            $(this).siblings(".reply").remove();
        }
    })

})

    //��ȡ��ǰ����ʱ��
    function getCurrentTIme(){
        var currentTime=new Date();
        var month=currentTime.getMonth()+1;//�·ݴ�0��ʼ��
        var day=currentTime.getDate();
        var hour=currentTime.getHours();
        var minute=currentTime.getMinutes();
        var time=month.toString()+"-"+day.toString()+" "+hour.toString()+":"+minute.toString();//������ת��Ϊ��Ӧ���ַ���
        return time;
    }

    //ͳ�ƻظ������������ۻ��ظ�
    function countNum(str,word){
        var positions=new Array();
        var pos=str.indexOf(word);

        while(pos>-1){
            positions.push(pos);
            pos=str.indexOf(word,pos+1);
        }

        return positions.length;
    }