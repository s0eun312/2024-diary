const title = document.querySelector('.title-h1');
const switchBtn = document.querySelector('.toggle-switch');
const school = document.querySelector('.school-contents');
const job = document.querySelector('.job-contents');

switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('active');
    
    // 스위치 토글에 따라 타이틀 전환
    if (switchBtn.classList.contains('active')) {
        title.innerHTML = "JOB";
        school.classList.add('hidden');
        job.classList.remove('hidden');
    } else {
        title.innerHTML = "SCHOOL";
        school.classList.remove('hidden');
        job.classList.add('hidden');
    }
});