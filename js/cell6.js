const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const result = box.parentElement.querySelector(".result");
        const pangpare = document.querySelector(".pangpare");

        box.style.display = "none";
        result.style.display = "flex";

        if (result.textContent === "WIN") {
            pangpare.style.display = "flex";

            // 일정 시간 후 팡파레 효과 없애기
            setTimeout(() => {
                pangpare.style.display = "none";
            }, 1300);
        }
    });
});