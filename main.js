$(document).ready(function(){
    $(this).scrollTop(0);

    $(document).on("click", ".display-video a", function(e){
        e.preventDefault();
        $("#explain").show();
        $(".display-video").hide();

        $("#explain")[0].src += "&autoplay=1";
    });
});