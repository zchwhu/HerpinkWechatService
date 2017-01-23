/**
 * Created by Administrator on 2016/6/06.
 */
$(document).ready(function(){
    //ʱ��ѡ������
    $("#begintime").datetimePicker();
    $("#endtime").datetimePicker();

    //��ѡ������
    //$("#type").select({
    //    title: "��ѡ������",
    //    items: ["Ůѧ��", "���˼�", "�����", "�ۺ�club"]
    //});

    $("#location").select({
        title:"��ѡ���ص�",
        items:["��ɽ��","������","������","�����","�̵���","������","������","������","�~����","��������","��ɽ��","������","������"]
    })


    //�ϴ�ͼƬԤ��Ч��
    $(function () {
        // �����ϴ���ͼƬ����
        var allowTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        // 1024KB��Ҳ���� 1MB
        var maxSize = 1024 * 1024;
        // ͼƬ�����
        var maxWidth = 300;
        // ����ϴ�ͼƬ����
        var maxCount = 5;
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

                //���Ƶ���ͼƬ����Ŀ
                if (files.length > maxCount) {
                    $.alert('���ֻ���ϴ�' + maxCount + '��ͼƬ');
                    return;
                }

                //�����ܹ��ϴ�ͼƬ����Ŀ
                if (files.length+$('.weui_uploader_file').length > maxCount) {
                    $.alert('���ֻ���ϴ�' + maxCount + '��ͼƬ');
                    return;
                }

                if ($('.weui_uploader_file').length > maxCount) {
                    $.alert('���ֻ���ϴ�' + maxCount + '��ͼƬ');
                    return;
                }

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

    //ͼƬ����ͳ��Ч��
    $(document).on("click",".weui_uploader_file span",function(){
        $(this).parent(".weui_uploader_file").remove();
        var num = $('.weui_uploader_file').length;
        $("#photoNum span").text(num);
    })

    $("form").submit(function(){
        var pattern= /^[0-9]*$/;
        if($("input[name='topic']").val().length==0){
            $.alert("����������");
            return false;
        }else if($("input[name='begintime']").val().length==0){
            $.alert("��ѡ����ʼʱ��");
            return false;
        }else if($("input[name='endtime']").val().length==0){
            $.alert("����������ʱ��");
            return false;
        }else if(compareTime($("input[name='begintime']").val(),$("input[name='endtime']").val())==true){
            $.alert("���ʼʱ�䲻�ܴ��ڽ���ʱ��");
            return false;
        }else if($("input[name='personnum']").val().length==0){
            $.alert("����д�����");
            return false;
        }else if($("input[name='location']").val().length==0){
            $.alert("��ѡ���ص�");
            return false;
        }else if($("input[name='locationdetail']").val().length==0){
            $.alert("����д�����ص�");
            return false;
        }else if($("textarea[name='content']").val().length==0){
            $.alert("���Ҫ���������");
            return false;
        }else if($('.weui_uploader_file').length==0){
            $.alert("���ϴ�����һ�ŻͼƬ");
            return false;
        }else{
            $.alert("���Ϣ�ύ�ɹ�,��ȴ����");
            return true;
        }
    });

    //�Ƚ��������ڵĴ�С
    function compareTime(startDate,endDate){
            var startDateTemp = startDate.split(" ");
            var endDateTemp = endDate.split(" ");
            var arrStartDate = startDateTemp[0].split("-");
            var arrEndDate = endDateTemp[0].split("-");
            var arrStartTime = startDateTemp[1].split(":");
            var arrEndTime = endDateTemp[1].split(":");
            var allStartDate = new Date(arrStartDate[0],arrStartDate[1],arrStartDate[2],arrStartTime[0],arrStartTime[1]);
            var allEndDate = new Date(arrEndDate[0],arrEndDate[1],arrEndDate[2],arrEndTime[0],arrEndTime[1]);
            if(allStartDate.getTime()>=allEndDate.getTime()){
                return true;
            }else{
                return false;
            }
    }

})
