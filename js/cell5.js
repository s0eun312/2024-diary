$(() => {
    // 스티커 정답처리
    $(".sticker").draggable({ revert: "invalid" });

    $(".put").each(function() {
        // put number
        const putClass = $(this).attr("class").match(/put\d/)[0];

        $(this).droppable({
            // put과 스티커 숫자 맞추기
            accept: `.${putClass.replace('put', 'sticker')}`,
            drop: function(event, ui) {
                const $sticker = $(ui.draggable);
                const $put = $(this); // this : 이벤트가 일어나고 있는 요소

                // 스티커 위치 및 크기 조정
                $sticker.addClass('goal');
            }
        });
    });
});