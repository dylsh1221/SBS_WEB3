// 2. 부모, 자식 요서 선택자

// 부모 요소 선택자 : 선택한 요소의 친부모 요소만 선택
$(".second").parent().css("border","1px solid red");

// 상위 요소 선택자 : 선택한 요소의 모든 상위 요소를 선택
// $(".second").parents().css("background","grey");

// 하위 요소 선택자 : 자식과 하위를 모두 포함
// $(".wrap.li").css("color", "green");

// ==================================================================================================================

// 3. 형제 요소 선택

// 형제(이전) 선택자 : 선택한 요소의 이전 요소 1개(첫번째) 선택
$(".container").prev().css("color","tomato");

// 형제(이전) 선택자2 : 선택한 요소의 이전 모든 요소 선택
$(".container").revAll().css("border","5px solid red");

//형제(다음) 선택자 : 선택한 요소의 이후 요소 1개(첫번째) 선택
$(".container").next().css("color","aqua");

// 현제(다음) 선택자 : 선택한 요소의 이후 모든 요소 선택
$(".container").nextAll().css("border","5px solid orange");

// 모든 형제 요소 선택 : 모든 형제 요소 선택(선택된 요소 제외)
$(".container").siblings().css("background","gray");

// ===================================================================================================================

// 4. 위치 선택자

// 첫번째 요소 선택1
// $(".menu li:first").css("color","red");  // 선택자 인수로 넣어서 사용
$(".menu li").first().css("color","orange");    // 메소드로 사용

// 마지막 요소 선택
// $(".menu li:list").css("color","blue");
$(".menu li").list().css("color","tomato");

// =====================================================================================================================

// 5. 탐색 선택자
// index 기준으로 선택

// 지정한 인덱스가 참조하는 요소만 선택
$(".search li:eq(3)").css("background","pink");

// 지정한 인덱스보다 작은 요소만 선택(less then)
$(".search li:lt(3)").css("background","orange");

// 지정한 인덱스보다 큰 요소만 선택(reater then)
$(".search li:qt(3)").css("background","tomato");

// ====================================================================================================================

// 6. 속성 탐색 선택자 :

// 요소[속성] : 속성이 있는 요소 선택
$("a[title]").css("border","5px solid red");

// 요소[속성=값] : 속성과 값이 일치하는 요소 선택
$("a[href='https://www.naver.com']").css("background","pink");

// 요소 속성의 값으로 시작하는 요소 선택
$("a[href^='mailto']").css("background","aqua");

// 요소 속성의 값으로 끝나는 요소 선택
$("a[href$='net']").css("background","gray");

// 요소 속성의 값이 포함되는 요소 선택
$("a[href*='naver']").css("border","5px solid orange");

// 요소의 and 조건으로 조건 2개의 속성과 값을 모두 만족하는 요소 선택
$("a[href^='mailto][href='ccccc']").css("font-weight","bold");