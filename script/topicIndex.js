/**
 * Created by Administrator on 2016/6/12.
 */
var loading = false;  //״̬���
$(document.body).infinite().on("infinite", function() {
    if(loading) return;
    loading = true;
    setTimeout(function() {
        $("#content").append("<p> �����¼��ص����� </p>");//���ù�����������
        loading = false;
    }, 1500);   //ģ���ӳ�
});