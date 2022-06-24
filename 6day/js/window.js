/* 
    DOM , Window 객체

    .innerWidth : 브라우저 안쪽의 넓이 값 반환
    .innerHeight : 브라우저 안쪽의 높이 값 반환
    .outerWidth : 브라우저 프레임을 포함한 넓이 값 반환
    .outerHeight : 브라우저 프페임을 포함한 높이 값 반환
    .scrollY : 현재 스크롤된 브라우저의 Y축 거리 값 반환
    .scrollX
*/

// console.log(window);

window.addEventListener("resize" , e=> {
    // console.log(window.innerWidth);
    console.log(window.innerHeight);
    // console.log(window.outerWidth);
    console.log(window.outerHeight);
})

window.addEventListener("scroll" , e=> {
    console.log(`y축 ${window.scrollY}`);
    console.log(`x축 ${window.scrollX}`);
});