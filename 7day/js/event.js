$(document).ready(function() {
    $(".btn").on("click", function() {  // on = 이벤트리스너
        alert("환영합니다.")
    });

    $(".menu li").on("click", function() {
        alert($(this).html());
    });

/*     // 첫번째 방법
    $(".btn1").on("click",function(e) {
        $(".text").css("background","yellow");
    }); */

    // 두번째 방법
    $(".btn1").click(function() {
        $(".text").css("background","yellow");
    });

    $("btn2").on("dblclick",function() {
        $(".text").css("border","2px solid tomato");
    });

    // ===============================================================

    $(".btn3").on("mouseover",function() {
        $(".box").css("background","pink");
    });
    $(".btn3").on("mouseout",function() {
        $(".box").css("background","gray");
    });

    $(".btn4").hover(
        function() {
            $(".box").css("border","5px solid red");
        },
        function() {
            $(".box").css("background","aqua");
        }
    )
});