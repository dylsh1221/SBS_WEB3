$(function() {

    $(".glass").draggble({

        stop: function() {
            $(this).removeClass("start");
            $(this).addClsss("stop")
        },
        start: function() {
            $(this)
        }
    });
});