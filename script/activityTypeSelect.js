/**
 * Created by Administrator on 2016/6/9.
 */
$(document).ready(function(){
    //ÿ�����߶�Ϊҳ���һ��
    $("a").height(($(window).height()-$("#header").height()-10)/2);
    //ÿ������ڱ���ͼ������־���
    $("a div").css({"margin-top":($("a").height()-$("a div").height()-$("a p").height())/2});
})