/* 
    DOM : Document Object Model : 문서 객체 모델

    자식요소 탐색 :
    - 부모요소.children = 친자식
    - 부모요소.querySelector() = 탐색할 대상을 인수로 삽입

    형제요소 탐색 :
    - 이전 형제 요소 탐색 : 형제요소.previousElementSlbling
    - 다음 형제 요소 탐색 : 형제요소.nextElementSlbling

    부모요소 탐색 :
    - 현재요소.parentElement = 친부모
    - 현재요소.closest() = 탐색할 대상을 인수로 삽입
*/

const wrap = document.querySelector("#wrap");
console.log(wrap);

const box2 = wrap.querySelector(".box2");
console.log(box2);

const boxList = wrap.children;
console.log(boxList);   // 유사배열
console.log(boxList[2]);

const prevEl = box2.previousElementSibling;
const nextEl = box2.nextElementSibling;
console.log(prevEl);
console.log(nextEl);

const a = box2.querySelector("a");
const parentEl = a.parentElement;
const grandParentEl = a.closest("#wrap");
console.log(parentEl);
console.log(grandParentEl);