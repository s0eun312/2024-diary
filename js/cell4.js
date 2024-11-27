const content = document.querySelector("p");
const cards = document.querySelectorAll("ul");
const cardTxt = {
    "card-1": "식당이름 | 위치 | 메뉴 <br /> Date.  With.",
    "card-2": "식당이름 | 위치 | 메뉴 <br /> Date.  With.",
    "card-3": "식당이름 | 위치 | 메뉴 <br /> Date.  With.",
    "card-4": "식당이름 | 위치 | 메뉴 <br /> Date.  With.",
};

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const cardClass = card.classList[0];
        content.innerHTML = cardTxt[cardClass];
    });

    card.addEventListener("mouseleave", () => {
        content.innerHTML = "Hover the Card !";
    });
});
