const img = document.querySelector('.ice');
const btn = document.querySelector('button');
const toppings = document.querySelectorAll(".topping");

// div 선택 css
toppings.forEach(topping => {
    topping.addEventListener('click', () => {
        topping.classList.toggle('select');
    });
});

btn.addEventListener('click', () => {
    const selectedToppings = document.querySelectorAll(".topping.select");
    const correctToppings = document.querySelectorAll(".topping.correct.select");

    if (selectedToppings.length !== correctToppings.length || correctToppings.length !== 3) {
        // 1. 선택 토핑수와 정답 토핑 수가 다를 경우
        // 2. 정답 토핑 수가 3개가 아닐 경우
        // 오답 처리: 경고창 띄우기
        alert("이 조합은 내 취향이 아닌 것 같다...ㅜㅡㅜ");
    } else {
        // 정답 처리: 이미지 전환
        img.style.transition = "opacity 0.5s ease";
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = "../public/test2.svg";
            img.style.opacity = 1;
        }, 500);
    }
});