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
    // 오답 처리
    let isValid = true;

    // 정답 처리
    toppings.forEach(topping => {
        // 선택된 토핑들 중 correct 클래스를 가진 div
        if (topping.classList.contains('select') && !topping.classList.contains('correct')) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert("이 조합은 내 취향이 아닌 것 같다...ㅜㅡㅜ");
    } else {
        // 정답 후 이미지 전환 효과
        img.style.transition = "opacity 0.5s ease";
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = "../public/test2.svg";
            img.style.opacity = 1;
        }, 500);
    }
});