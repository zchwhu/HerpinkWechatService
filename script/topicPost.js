/**
 * Created by Administrator on 2016/5/25.
 */
$(document).ready(function(){
    //����ѡ�������Ч��
    //���ܶԽ��õ��������¼�
    $("#topicSelect div").click(function(){
        if($("#topicTypeSelect").is(":hidden")){
            $("#topicTypeSelect").slideDown();
        }else{
            $("#topicTypeSelect").slideUp();
        }
    });

    //����ѡ��Ч��
    $("#topicTypeSelect label").click(function(){
        var $selectText=$(this).find("div").find("p").text();
        $("#topicSelect div").text($selectText)
            .css({"color":"#333333"});
        $("#topicTypeSelect").slideUp();
    })

    //�ı�������ͳ��Ч��
    //change�¼���ʧȥ�������������ﲻ����
    //textarea��ֵ��ȡ��val����text
    $("#commentArea textarea").bind("keyup", function(){
        var $maxNum=5000;
        var $commentNum=$(this).val().length;
        $("#commentArea .weui_textarea_counter span").text($commentNum);
        if($commentNum>$maxNum){
            $("#commentArea .weui_textarea_counter span").css({"color":"#F43530"})
        }else{
            $("#commentArea .weui_textarea_counter span").css({"color":"#B2B2B2"})
        }
    })

    //���ⷢ���¼�
    $(document).on("click", "#post", function() {
        if($("#topicSelect div").text()=="ѡ��������"){
            $(".info.error p").text("��ѡ����");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#commentArea textarea").val().length==0){
            $(".info.error p").text("���ݲ���Ϊ��");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else if($("#commentArea textarea").val().length>5000){
            $(".info.error p").text("������������");
            $(".info.error").fadeIn("fast");
            setTimeout(function(){
                $(".info.error").fadeOut();
            },2000);
            return false;
        }else{
            $(".info.success").fadeIn("fast");
            setTimeout(function(){
                $(".info.success").fadeOut();
                //$("form").submit();
            },2000);
            return true;
        }
    });

    $(function () {
        // �����ϴ���ͼƬ����
        var allowTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        // 1024KB��Ҳ���� 1MB
        var maxSize = 1024 * 1024;
        // ͼƬ�����
        var maxWidth = 300;
        // ����ϴ�ͼƬ����
        var maxCount = 9;
        $('.weui_uploader_input').on('change', function (event) {
            var files = event.target.files;

            // ���û��ѡ���ļ���ֱ�ӷ���
            if (files.length === 0) {
                return;
            }

            for (var i = 0, len = files.length; i < len; i++) {
                var file = files[i];
                var reader = new FileReader();

                // ������Ͳ�����������ͷ�Χ��
                if (allowTypes.indexOf(file.type) === -1) {
                    $.weui.alert({text: '�����Ͳ������ϴ�'});
                    continue;
                }

                if (file.size > maxSize) {
                    $.weui.alert({text: 'ͼƬ̫�󣬲������ϴ�'});
                    continue;
                }

//                if ($('.weui_uploader_file').length >= maxCount) {
//                    $.weui.alert({text: '���ֻ���ϴ�' + maxCount + '��ͼƬ'});
//                    return;
//                }

                reader.onload = function (e) {
                    var img = new Image();
                    img.onload = function () {
                        // ��Ҫ���������
                        var w = Math.min(maxWidth, img.width);
                        // �߶Ȱ���������
                        var h = img.height * (w / img.width);
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');
                        // ���� canvas �Ŀ�Ⱥ͸߶�
                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);
                        var base64 = canvas.toDataURL('image/png');

                        // ���뵽Ԥ����
                        var $preview = $('<li class="weui_uploader_file weui_uploader_status" style="background-image:url(' + base64 + ')"><span></span><div class="weui_uploader_status_content">0%</div></li>');
                        //$('.weui_uploader_files').empty();
                        $('.weui_uploader_files').append($preview);
                        var num = $('.weui_uploader_file').length;
//                        $('.js_counter').text(num + '/' + maxCount);
                        $("#photoNum span").text(num);

                        // Ȼ���װ���ϴ�������post base64��ʽ��Ҳ���Թ���blob�����ϴ���Ҳ������΢��JSSDK�ϴ�

                        var progress = 0;
                        function uploading() {
                            $preview.find('.weui_uploader_status_content').text(++progress + '%');
                            if (progress < 100) {
                                setTimeout(uploading, 30);
                            }
                            else {
                                // �����ʧ�ܣ���һ��ʧ��ͼ��
                                //$preview.find('.weui_uploader_status_content').html('<i class="weui_icon_warn"></i>');
                                $preview.removeClass('weui_uploader_status').find('.weui_uploader_status_content').remove();
                            }
                        }
                        setTimeout(uploading, 30);
                    };

                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });

    $(document).on("click",".weui_uploader_file span",function(){
        $(this).parent(".weui_uploader_file").remove();
        var num = $('.weui_uploader_file').length;
        $("#photoNum span").text(num);
    })
})