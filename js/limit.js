/**
 * Created by admin on 2016/4/30.
 */
$(function(){
    jQuery.fn.limit=function(){
        var self = $(".showContent p[limit]");
        self.each(function(){
            var objString = $(this).text();
            var objLength = $(this).text().length;
            var num = $(this).attr("limit");
            if(objLength > num){
                $(this).attr("title",objString);
                objString = $(this).text(objString.substring(0,num) + "...");
            }
        })
    }
    $(function(){
        $(document.body).limit();
    });

});